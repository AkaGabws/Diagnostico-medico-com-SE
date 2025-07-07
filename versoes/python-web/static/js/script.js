// Sistema de Diagnóstico Médico - Versão Python Web
// JavaScript ES6+ que se comunica com backend Python via API

class SistemaDiagnosticoPythonWeb {
    constructor() {
        this.apiBase = '/api';
        this.inicializar();
    }

    inicializar() {
        this.configurarEventos();
        this.atualizarEstatisticas();
        this.carregarListaDoencas();
    }

    configurarEventos() {
        // Formulário de diagnóstico
        const form = document.getElementById('diagnosticoForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.realizarDiagnostico();
        });

        // Validação em tempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validarCampo(input));
            input.addEventListener('blur', () => this.validarCampo(input));
        });

        // Fechar modais ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });

        // Fechar modais com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.fecharTodosModais();
            }
        });
    }

    validarCampo(campo) {
        const valor = campo.value.trim();
        let valido = true;
        let mensagem = '';

        // Remover classes de erro anteriores
        campo.classList.remove('error');

        // Validações específicas
        switch (campo.id) {
            case 'nome':
                if (valor.length < 2) {
                    valido = false;
                    mensagem = 'Nome deve ter pelo menos 2 caracteres';
                }
                break;
            case 'idade':
                const idade = parseInt(valor);
                if (isNaN(idade) || idade < 1 || idade > 150) {
                    valido = false;
                    mensagem = 'Idade deve ser entre 1 e 150 anos';
                }
                break;
            case 'sintomas':
                if (valor.length < 3) {
                    valido = false;
                    mensagem = 'Descreva pelo menos um sintoma';
                }
                break;
        }

        // Aplicar validação
        if (!valido) {
            campo.classList.add('error');
            this.mostrarErro(campo, mensagem);
        } else {
            this.removerErro(campo);
        }

        return valido;
    }

    mostrarErro(campo, mensagem) {
        let erroElement = campo.parentNode.querySelector('.error-message');
        if (!erroElement) {
            erroElement = document.createElement('div');
            erroElement.className = 'error-message';
            erroElement.style.color = 'var(--danger-color)';
            erroElement.style.fontSize = 'var(--font-size-sm)';
            erroElement.style.marginTop = 'var(--spacing-xs)';
            campo.parentNode.appendChild(erroElement);
        }
        erroElement.textContent = mensagem;
    }

    removerErro(campo) {
        const erroElement = campo.parentNode.querySelector('.error-message');
        if (erroElement) {
            erroElement.remove();
        }
    }

    validarFormulario() {
        const form = document.getElementById('diagnosticoForm');
        const campos = form.querySelectorAll('input[required], textarea[required]');
        let valido = true;

        campos.forEach(campo => {
            if (!this.validarCampo(campo)) {
                valido = false;
            }
        });

        return valido;
    }

    async realizarDiagnostico() {
        if (!this.validarFormulario()) {
            this.mostrarNotificacao('Por favor, corrija os erros no formulário', 'error');
            return;
        }

        // Mostrar loading
        this.mostrarLoading(true);

        try {
            const formData = new FormData(document.getElementById('diagnosticoForm'));
            const dados = {
                nome: formData.get('nome'),
                idade: formData.get('idade'),
                sexo: formData.get('sexo'),
                sintomas: formData.get('sintomas')
            };

            // Chamar API Python
            const response = await fetch(`${this.apiBase}/diagnosticar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });

            const resultado = await response.json();

            if (resultado.sucesso) {
                this.exibirResultado(resultado.resultado, resultado.dados_paciente);
                this.atualizarEstatisticas();
            } else {
                this.mostrarNotificacao(resultado.erro || 'Erro ao realizar diagnóstico', 'error');
            }

        } catch (error) {
            console.error('Erro na API:', error);
            this.mostrarNotificacao('Erro de conexão com o servidor Python', 'error');
        } finally {
            this.mostrarLoading(false);
        }
    }

    exibirResultado(resultado, dados) {
        const resultadoSection = document.getElementById('resultsSection');
        const resultadoContent = document.getElementById('resultadoContent');

        let html = `
            <div class="resultado-item">
                <div class="resultado-header">
                    <div class="diagnostico-principal">
                        <i class="fas fa-user-md"></i> ${resultado.diagnostico}
                    </div>
                    ${resultado.confiabilidade > 0 ? 
                        `<div class="confiabilidade">${resultado.confiabilidade.toFixed(1)}%</div>` : 
                        ''
                    }
                </div>
                
                ${resultado.severidade !== "indefinida" ? 
                    `<div class="severidade ${resultado.severidade}">
                        <i class="fas fa-exclamation-triangle"></i>
                        Severidade: ${resultado.severidade.toUpperCase()}
                    </div>` : 
                    ''
                }
                
                <div class="recomendacoes">
                    <h4><i class="fas fa-lightbulb"></i> Recomendações:</h4>
                    <ul>
                        ${resultado.recomendacoes.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
                
                ${resultado.alternativas && resultado.alternativas.length > 0 ? 
                    `<div class="alternativas">
                        <h4><i class="fas fa-search"></i> Outras possibilidades:</h4>
                        <ul>
                            ${resultado.alternativas.map(alt => `<li>${alt}</li>`).join('')}
                        </ul>
                    </div>` : 
                    ''
                }
                
                <div class="aviso-importante">
                    <p><i class="fas fa-exclamation-triangle"></i> 
                    <strong>Aviso:</strong> Este é um sistema de apoio ao diagnóstico. 
                    Sempre consulte um profissional de saúde para confirmação e tratamento adequado.</p>
                </div>
            </div>
        `;

        resultadoContent.innerHTML = html;
        resultadoSection.style.display = 'block';
        resultadoSection.scrollIntoView({ behavior: 'smooth' });
    }

    async mostrarHistorico() {
        try {
            const response = await fetch(`${this.apiBase}/historico`);
            const resultado = await response.json();

            if (resultado.sucesso) {
                this.exibirHistorico(resultado.historico);
            } else {
                this.mostrarNotificacao('Erro ao carregar histórico', 'error');
            }
        } catch (error) {
            console.error('Erro ao carregar histórico:', error);
            this.mostrarNotificacao('Erro de conexão com o servidor', 'error');
        }
    }

    exibirHistorico(historico) {
        const historySection = document.getElementById('historySection');
        const historicoContent = document.getElementById('historicoContent');

        if (historico.length === 0) {
            historicoContent.innerHTML = '<p>Nenhum diagnóstico realizado ainda.</p>';
        } else {
            const html = historico.map(diag => `
                <div class="historico-item">
                    <div class="historico-header">
                        <div>
                            <div class="historico-data">
                                <i class="fas fa-calendar"></i> 
                                ${new Date(diag.data).toLocaleDateString('pt-BR')} 
                                ${new Date(diag.data).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}
                            </div>
                            <div class="historico-diagnostico">${diag.nome} - ${diag.diagnostico}</div>
                        </div>
                        <div class="historico-confianca">${diag.confiabilidade.toFixed(1)}%</div>
                    </div>
                </div>
            `).join('');

            historicoContent.innerHTML = html;
        }

        historySection.style.display = 'block';
        historySection.scrollIntoView({ behavior: 'smooth' });
    }

    async limparHistorico() {
        if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
            try {
                const response = await fetch(`${this.apiBase}/limpar-historico`, {
                    method: 'POST'
                });
                const resultado = await response.json();

                if (resultado.sucesso) {
                    this.mostrarNotificacao('Histórico limpo com sucesso', 'success');
                    document.getElementById('historySection').style.display = 'none';
                    this.atualizarEstatisticas();
                } else {
                    this.mostrarNotificacao('Erro ao limpar histórico', 'error');
                }
            } catch (error) {
                console.error('Erro ao limpar histórico:', error);
                this.mostrarNotificacao('Erro de conexão com o servidor', 'error');
            }
        }
    }

    async atualizarEstatisticas() {
        try {
            const response = await fetch(`${this.apiBase}/estatisticas`);
            const resultado = await response.json();

            if (resultado.sucesso) {
                const stats = resultado.estatisticas;
                document.getElementById('diagnosticosHoje').textContent = stats.diagnosticos_hoje;
            }
        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
        }
    }

    async carregarListaDoencas() {
        try {
            const response = await fetch(`${this.apiBase}/doencas`);
            const resultado = await response.json();

            if (resultado.sucesso) {
                this.exibirListaDoencas(resultado.doencas);
            }
        } catch (error) {
            console.error('Erro ao carregar doenças:', error);
        }
    }

    exibirListaDoencas(doencas) {
        const listaDoencas = document.getElementById('listaDoencas');
        const html = Object.entries(doencas).map(([doenca, info]) => `
            <div class="doenca-item">
                <div class="doenca-nome">${doenca}</div>
                <div class="doenca-sintomas">
                    <strong>Sintomas:</strong> ${info.sintomas.join(', ')}
                </div>
                <div class="doenca-severidade ${info.severidade}">
                    ${info.severidade.toUpperCase()}
                </div>
            </div>
        `).join('');

        listaDoencas.innerHTML = html;
    }

    mostrarDoencas() {
        document.getElementById('modalDoencas').style.display = 'block';
    }

    mostrarSobre() {
        document.getElementById('modalSobre').style.display = 'block';
    }

    mostrarEmergencia() {
        document.getElementById('modalEmergencia').style.display = 'block';
    }

    fecharModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    fecharTodosModais() {
        const modais = document.querySelectorAll('.modal');
        modais.forEach(modal => modal.style.display = 'none');
    }

    mostrarLoading(mostrar) {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = mostrar ? 'flex' : 'none';
    }

    mostrarNotificacao(mensagem, tipo = 'info') {
        // Criar notificação
        const notificacao = document.createElement('div');
        notificacao.className = `notificacao notificacao-${tipo}`;
        notificacao.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;

        // Cores por tipo
        const cores = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#06b6d4'
        };

        notificacao.style.backgroundColor = cores[tipo] || cores.info;
        notificacao.textContent = mensagem;

        document.body.appendChild(notificacao);

        // Remover após 5 segundos
        setTimeout(() => {
            notificacao.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notificacao.parentNode) {
                    notificacao.parentNode.removeChild(notificacao);
                }
            }, 300);
        }, 5000);
    }
}

// Funções globais para compatibilidade com HTML
function limparFormulario() {
    document.getElementById('diagnosticoForm').reset();
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('historySection').style.display = 'none';
}

function mostrarHistorico() {
    sistema.mostrarHistorico();
}

function mostrarDoencas() {
    sistema.mostrarDoencas();
}

function mostrarSobre() {
    sistema.mostrarSobre();
}

function mostrarEmergencia() {
    sistema.mostrarEmergencia();
}

function fecharModal(modalId) {
    sistema.fecharModal(modalId);
}

function limparHistorico() {
    sistema.limparHistorico();
}

// Inicializar sistema quando a página carregar
let sistema;
document.addEventListener('DOMContentLoaded', () => {
    sistema = new SistemaDiagnosticoPythonWeb();
    
    // Adicionar CSS para animações de notificação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .form-group input.error,
        .form-group textarea.error {
            border-color: var(--danger-color);
            box-shadow: 0 0 0 3px rgb(239 68 68 / 0.1);
        }
    `;
    document.head.appendChild(style);
}); 