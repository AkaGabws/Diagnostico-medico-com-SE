// Sistema de Diagnóstico Médico - Versão Web
// JavaScript ES6+ com funcionalidades modernas

class SistemaDiagnosticoWeb {
    constructor() {
        this.baseDeConhecimento = {
            "Gripe": {
                sintomas: ["febre alta", "dor de cabeça", "dores musculares", "tosse", "fadiga"],
                severidade: "moderada",
                recomendacoes: ["Repouso", "Hidratação", "Medicamentos para febre"],
                procuraMedico: false
            },
            "Resfriado": {
                sintomas: ["coriza", "espirros", "dor de garganta", "congestão nasal"],
                severidade: "leve",
                recomendacoes: ["Repouso", "Hidratação", "Descongestionante nasal"],
                procuraMedico: false
            },
            "Alergia": {
                sintomas: ["coceira nos olhos", "espirros", "nariz entupido", "coriza clara"],
                severidade: "leve",
                recomendacoes: ["Antialérgicos", "Evitar alérgenos", "Lavar nariz"],
                procuraMedico: false
            },
            "Botulismo": {
                sintomas: ["prisão de ventre", "tontura", "visão distorcida", "dificuldade de abrir os olhos", "fraqueza muscular"],
                severidade: "grave",
                recomendacoes: ["PROCURAR MÉDICO IMEDIATAMENTE", "Tratamento de emergência necessário"],
                procuraMedico: true
            },
            "Brucelose": {
                sintomas: ["calafrio", "dor de cabeça", "cansaço", "febre", "suor noturno"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos", "Repouso", "Acompanhamento médico"],
                procuraMedico: true
            },
            "Cistite": {
                sintomas: ["vontade frequente de urinar", "ardor ao urinar", "febre", "dor pélvica"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos", "Hidratação", "Acompanhamento médico"],
                procuraMedico: true
            },
            "Cólera": {
                sintomas: ["diarreia", "desidratação", "vômitos", "fraqueza", "cãibras"],
                severidade: "grave",
                recomendacoes: ["PROCURAR MÉDICO IMEDIATAMENTE", "Hidratação oral", "Tratamento de emergência"],
                procuraMedico: true
            },
            "Coqueluche": {
                sintomas: ["febre", "espirro", "mal-estar", "tosse seca prolongada", "tosse convulsiva"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos", "Repouso", "Acompanhamento médico"],
                procuraMedico: true
            },
            "Difteria": {
                sintomas: ["dor de garganta", "aparecimento de placas nas amígdalas", "febre", "mal-estar", "dificuldade para engolir"],
                severidade: "grave",
                recomendacoes: ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Tratamento de emergência"],
                procuraMedico: true
            },
            "Escarlatina": {
                sintomas: ["manchas vermelhas na pele", "febre alta", "dor de garganta", "dores musculares", "língua vermelha"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos", "Repouso", "Acompanhamento médico"],
                procuraMedico: true
            },
            "Febre Tifoide": {
                sintomas: ["febre alta prolongada", "dor de cabeça", "náuseas", "falta de apetite", "diarreia"],
                severidade: "grave",
                recomendacoes: ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Tratamento hospitalar"],
                procuraMedico: true
            },
            "Gonorreia": {
                sintomas: ["dor e ardor ao urinar", "sangramentos", "corrimento amarelado", "dor pélvica"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos", "Acompanhamento médico", "Tratamento do parceiro"],
                procuraMedico: true
            },
            "Hanseníase": {
                sintomas: ["manchas na pele", "inchaço nas mãos e pés", "perda de força muscular", "formigamento"],
                severidade: "moderada",
                recomendacoes: ["Antibióticos específicos", "Acompanhamento médico", "Tratamento prolongado"],
                procuraMedico: true
            },
            "Impetigo": {
                sintomas: ["bolhas", "dor", "úlceras", "coceira", "feridas com crosta"],
                severidade: "leve",
                recomendacoes: ["Antibióticos tópicos", "Higiene local", "Acompanhamento médico"],
                procuraMedico: true
            },
            "Pneumonia": {
                sintomas: ["febre alta", "tosse com catarro", "dificuldade para respirar", "dor no peito", "fadiga"],
                severidade: "grave",
                recomendacoes: ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Possível internação"],
                procuraMedico: true
            },
            "Diabetes": {
                sintomas: ["sede excessiva", "vontade frequente de urinar", "fome excessiva", "perda de peso", "fadiga"],
                severidade: "moderada",
                recomendacoes: ["Acompanhamento médico", "Controle glicêmico", "Dieta adequada"],
                procuraMedico: true
            }
        };

        this.historico = this.carregarHistorico();
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

    normalizarSintoma(sintoma) {
        return sintoma.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .trim();
    }

    calcularConfiabilidade(sintomasPaciente, sintomasDoenca) {
        const sintomasPacienteNorm = sintomasPaciente.map(s => this.normalizarSintoma(s));
        const sintomasDoencaNorm = sintomasDoenca.map(s => this.normalizarSintoma(s));
        
        let matches = 0;
        sintomasPacienteNorm.forEach(sintomaPaciente => {
            sintomasDoencaNorm.forEach(sintomaDoenca => {
                if (sintomaPaciente.includes(sintomaDoenca) || sintomaDoenca.includes(sintomaPaciente)) {
                    matches++;
                }
            });
        });

        return (matches / sintomasDoencaNorm.length) * 100;
    }

    realizarDiagnostico() {
        if (!this.validarFormulario()) {
            this.mostrarNotificacao('Por favor, corrija os erros no formulário', 'error');
            return;
        }

        // Mostrar loading
        this.mostrarLoading(true);

        // Simular processamento
        setTimeout(() => {
            const formData = new FormData(document.getElementById('diagnosticoForm'));
            const dados = {
                nome: formData.get('nome'),
                idade: formData.get('idade'),
                sexo: formData.get('sexo'),
                sintomas: this.extrairSintomas(formData.get('sintomas'))
            };

            const resultado = this.diagnosticar(dados);
            this.exibirResultado(resultado, dados);
            this.salvarNoHistorico(resultado, dados);
            this.atualizarEstatisticas();

            this.mostrarLoading(false);
        }, 1500);
    }

    extrairSintomas(textoSintomas) {
        if (!textoSintomas) return [];
        
        // Tenta separar por vírgulas primeiro
        if (textoSintomas.includes(',')) {
            return textoSintomas.split(',').map(s => s.trim()).filter(s => s);
        }
        
        // Se não há vírgulas, separa por linhas
        return textoSintomas.split('\n').map(s => s.trim()).filter(s => s);
    }

    diagnosticar(dados) {
        const { sintomas } = dados;
        
        if (sintomas.length === 0) {
            return {
                diagnostico: "Nenhum sintoma informado",
                confiabilidade: 0,
                recomendacoes: ["Por favor, informe seus sintomas"],
                procuraMedico: false,
                severidade: "indefinida",
                alternativas: []
            };
        }

        const melhoresMatches = [];

        for (const [doenca, info] of Object.entries(this.baseDeConhecimento)) {
            const confiabilidade = this.calcularConfiabilidade(sintomas, info.sintomas);
            if (confiabilidade > 30) { // Threshold mínimo
                melhoresMatches.push({
                    doenca,
                    confiabilidade,
                    info
                });
            }
        }

        // Ordenar por confiabilidade
        melhoresMatches.sort((a, b) => b.confiabilidade - a.confiabilidade);

        if (melhoresMatches.length > 0) {
            const melhorMatch = melhoresMatches[0];
            return {
                diagnostico: melhorMatch.doenca,
                confiabilidade: melhorMatch.confiabilidade,
                recomendacoes: melhorMatch.info.recomendacoes,
                procuraMedico: melhorMatch.info.procuraMedico,
                severidade: melhorMatch.info.severidade,
                alternativas: melhoresMatches.slice(1, 3).map(m => m.doenca)
            };
        }

        return {
            diagnostico: "Não foi possível fazer um diagnóstico preciso",
            confiabilidade: 0,
            recomendacoes: ["Consulte um médico para avaliação completa"],
            procuraMedico: true,
            severidade: "indefinida",
            alternativas: []
        };
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
                
                ${resultado.alternativas.length > 0 ? 
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

    salvarNoHistorico(resultado, dados) {
        const diagnostico = {
            id: Date.now(),
            data: new Date().toISOString(),
            nome: dados.nome,
            idade: dados.idade,
            sexo: dados.sexo,
            sintomas: dados.sintomas,
            diagnostico: resultado.diagnostico,
            confiabilidade: resultado.confiabilidade,
            severidade: resultado.severidade
        };

        this.historico.unshift(diagnostico);
        
        // Manter apenas os últimos 50 diagnósticos
        if (this.historico.length > 50) {
            this.historico = this.historico.slice(0, 50);
        }

        this.salvarHistorico();
    }

    carregarHistorico() {
        try {
            const historico = localStorage.getItem('diagnosticoHistorico');
            return historico ? JSON.parse(historico) : [];
        } catch (error) {
            console.error('Erro ao carregar histórico:', error);
            return [];
        }
    }

    salvarHistorico() {
        try {
            localStorage.setItem('diagnosticoHistorico', JSON.stringify(this.historico));
        } catch (error) {
            console.error('Erro ao salvar histórico:', error);
        }
    }

    mostrarHistorico() {
        const historySection = document.getElementById('historySection');
        const historicoContent = document.getElementById('historicoContent');

        if (this.historico.length === 0) {
            historicoContent.innerHTML = '<p>Nenhum diagnóstico realizado ainda.</p>';
        } else {
            const html = this.historico.map(diag => `
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

    limparHistorico() {
        if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
            this.historico = [];
            this.salvarHistorico();
            this.atualizarEstatisticas();
            this.mostrarNotificacao('Histórico limpo com sucesso', 'success');
            document.getElementById('historySection').style.display = 'none';
        }
    }

    atualizarEstatisticas() {
        const hoje = new Date().toDateString();
        const diagnosticosHoje = this.historico.filter(diag => 
            new Date(diag.data).toDateString() === hoje
        ).length;

        document.getElementById('diagnosticosHoje').textContent = diagnosticosHoje;
    }

    carregarListaDoencas() {
        const listaDoencas = document.getElementById('listaDoencas');
        const html = Object.entries(this.baseDeConhecimento).map(([doenca, info]) => `
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
    sistema = new SistemaDiagnosticoWeb();
    
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