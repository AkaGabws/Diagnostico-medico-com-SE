# Sistema de Diagnóstico Médico - Versão Python Web

## 🚀 Visão Geral

Esta é a versão **híbrida** do sistema que combina o melhor dos dois mundos:
- **Backend Python** robusto e confiável
- **Interface Web** moderna e responsiva
- **API REST** para integração e extensibilidade

## 🏗️ Arquitetura

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐
│   Frontend      │ ◄─────────────► │   Backend       │
│   (HTML/CSS/JS) │                 │   (Python Flask)│
└─────────────────┘                 └─────────────────┘
                                              │
                                              ▼
                                    ┌─────────────────┐
                                    │   Base de       │
                                    │   Conhecimento  │
                                    │   (JSON)        │
                                    └─────────────────┘
```

## 📁 Estrutura do Projeto

```
Diagnostico-medico-com-SE/
├── app.py                     # Servidor Flask principal
├── templates/
│   └── index.html            # Template HTML
├── static/
│   ├── css/
│   │   └── styles.css        # Estilos CSS
│   └── js/
│       └── script.js         # JavaScript (API calls)
├── historico_diagnosticos.json # Histórico persistente
├── requirements.txt           # Dependências Python
└── README_PYTHON_WEB.md      # Esta documentação
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Python 3.7 ou superior
- pip (gerenciador de pacotes Python)

### Passos de Instalação

1. **Clone ou baixe o projeto**
   ```bash
   # Se usando git
   git clone <url-do-repositorio>
   cd Diagnostico-medico-com-SE
   ```

2. **Instale as dependências**
   ```bash
   pip install -r requirements.txt
   ```

3. **Execute o servidor**
   ```bash
   python app.py
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5000
   ```

## 🔧 Funcionalidades

### ✅ Implementadas
- **Diagnóstico por sintomas** com 16 doenças
- **Cálculo de confiabilidade** do diagnóstico
- **Interface web responsiva** e moderna
- **Validação em tempo real** dos dados
- **Histórico persistente** em JSON
- **API REST completa** para integração
- **Estatísticas em tempo real**
- **Modais informativos** (doenças, sobre, emergência)
- **Notificações toast** para feedback
- **Loading spinner** durante processamento

### 🔄 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Interface principal |
| POST | `/api/diagnosticar` | Realizar diagnóstico |
| GET | `/api/historico` | Obter histórico |
| POST | `/api/limpar-historico` | Limpar histórico |
| GET | `/api/estatisticas` | Obter estatísticas |
| GET | `/api/doencas` | Listar doenças |

### 📊 Exemplo de Uso da API

```javascript
// Realizar diagnóstico
const response = await fetch('/api/diagnosticar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        nome: "João Silva",
        idade: "25",
        sexo: "masculino",
        sintomas: "febre alta, dor de cabeça, dores musculares"
    })
});

const resultado = await response.json();
console.log(resultado);
```

## 🎨 Interface

### Características do Design
- **Design responsivo** que funciona em desktop, tablet e mobile
- **Tema médico** com cores apropriadas
- **Ícones Font Awesome** para melhor UX
- **Tipografia Inter** do Google Fonts
- **Animações suaves** e transições
- **Modais informativos** para detalhes
- **Notificações toast** para feedback

### Seções Principais
1. **Formulário de Diagnóstico** - Coleta dados do paciente
2. **Resultados** - Exibe diagnóstico e recomendações
3. **Histórico** - Lista diagnósticos anteriores
4. **Sidebar** - Ações rápidas e estatísticas

## 🔍 Base de Conhecimento

O sistema inclui 16 doenças com sintomas detalhados:

### Doenças Leves
- Resfriado
- Alergia
- Impetigo

### Doenças Moderadas
- Gripe
- Brucelose
- Cistite
- Coqueluche
- Escarlatina
- Gonorreia
- Hanseníase
- Diabetes

### Doenças Graves
- Botulismo
- Cólera
- Difteria
- Febre Tifoide
- Pneumonia

## 🚨 Segurança e Validação

### Validações Implementadas
- **Nome**: Mínimo 2 caracteres
- **Idade**: Entre 1 e 150 anos
- **Sintomas**: Mínimo 3 caracteres
- **Sanitização**: Remoção de caracteres especiais
- **Rate Limiting**: Proteção contra spam

### Avisos de Segurança
- Sistema educacional apenas
- Sempre consultar médico real
- Não substitui diagnóstico profissional
- Emergências: procurar atendimento imediato

## 🔧 Configuração Avançada

### Variáveis de Ambiente
```bash
# Porta do servidor (padrão: 5000)
export FLASK_PORT=5000

# Modo debug (padrão: True)
export FLASK_DEBUG=True

# Host (padrão: 0.0.0.0)
export FLASK_HOST=0.0.0.0
```

### Personalização
- **Cores**: Edite `static/css/styles.css`
- **Lógica**: Modifique `app.py`
- **Base de conhecimento**: Atualize a classe `SistemaEspecialistaMedico`
- **Interface**: Personalize `templates/index.html`

## 📈 Monitoramento e Logs

### Logs do Sistema
- Diagnósticos realizados
- Erros de validação
- Acessos à API
- Estatísticas de uso

### Métricas Disponíveis
- Diagnósticos por dia
- Total de doenças na base
- Histórico de consultas
- Taxa de confiabilidade média

## 🚀 Deploy em Produção

### Para Desenvolvimento
```bash
python app.py
```

### Para Produção (Recomendado)
```bash
# Usando Gunicorn
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Usando Waitress (Windows)
pip install waitress
waitress-serve --host=0.0.0.0 --port=5000 app:app
```

### Docker (Opcional)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## 🔄 Comparação com Outras Versões

| Característica | Python Tkinter | Python Web | Web Puro |
|----------------|----------------|------------|----------|
| **Interface** | Desktop GUI | Web Browser | Web Browser |
| **Backend** | Python | Python Flask | JavaScript |
| **Persistência** | JSON | JSON | LocalStorage |
| **API** | Não | Sim | Não |
| **Deploy** | Local | Servidor | Qualquer lugar |
| **Manutenção** | Fácil | Média | Fácil |
| **Escalabilidade** | Baixa | Alta | Média |

## 🐛 Troubleshooting

### Problemas Comuns

**Erro: "ModuleNotFoundError: No module named 'flask'"`
```bash
pip install Flask
```

**Erro: "Address already in use"`
```bash
# Mude a porta
python app.py --port 5001
```

**Erro: "Permission denied"`
```bash
# No Windows, execute como administrador
# No Linux/Mac
sudo python app.py
```

**Interface não carrega**
- Verifique se o servidor está rodando
- Confirme a URL: http://localhost:5000
- Verifique o console do navegador (F12)

## 📞 Suporte

### Logs de Debug
```bash
# Ative logs detalhados
export FLASK_DEBUG=1
python app.py
```

### Verificação de Saúde
```bash
# Teste a API
curl http://localhost:5000/api/estatisticas
```

## 🔮 Roadmap

### Próximas Funcionalidades
- [ ] Autenticação de usuários
- [ ] Banco de dados SQL
- [ ] Machine Learning para diagnóstico
- [ ] Integração com APIs médicas
- [ ] Relatórios em PDF
- [ ] Dashboard administrativo
- [ ] Backup automático
- [ ] Cache Redis
- [ ] Testes automatizados
- [ ] CI/CD pipeline

### Melhorias Técnicas
- [ ] Async/await para melhor performance
- [ ] WebSockets para atualizações em tempo real
- [ ] PWA (Progressive Web App)
- [ ] Offline mode
- [ ] Push notifications
- [ ] Multi-language support

## 📄 Licença

Este projeto é educacional e não deve ser usado para diagnóstico médico real.

## 🤝 Contribuição

Para contribuir:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**⚠️ Aviso Importante**: Este sistema é apenas uma ferramenta educacional de apoio ao diagnóstico médico. Sempre consulte um profissional de saúde para confirmação e tratamento adequado. 