# 🚀 Configuração do Git - Sistema de Diagnóstico Médico

## 📋 Pré-requisitos

- Git instalado no seu computador
- Conta no GitHub (ou outro serviço Git)
- Projeto organizado e limpo

## 🔧 Configuração Inicial

### 1. Configurar Git (se ainda não configurou)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### 2. Inicializar Repositório (se necessário)
```bash
cd Diagnostico-medico-com-SE
git init
```

### 3. Adicionar Remote (GitHub)
```bash
# Crie um repositório no GitHub primeiro
git remote add origin https://github.com/seu-usuario/Diagnostico-medico-com-SE.git
```

## 📁 Estrutura Final do Projeto

```
Diagnostico-medico-com-SE/
├── 📄 README.md                    # README principal
├── 📄 LICENSE                      # Licença educacional
├── 📄 .gitignore                   # Arquivos ignorados
├── 📄 GIT_SETUP.md                 # Este arquivo
├── 📚 docs/                        # Documentação completa
│   ├── README.md                   # Documentação Python Tkinter
│   ├── README_PYTHON_WEB.md        # Documentação Python Web
│   ├── README_WEB.md               # Documentação Web Puro
│   ├── COMPARACAO_VERSOES.md       # Comparação detalhada
│   ├── INSTRUCOES_RAPIDAS.md       # Guia rápido
│   ├── CHANGELOG.md                # Histórico de mudanças
│   ├── exemplo_uso.md              # Exemplos práticos
│   ├── RESUMO_PROJETO.md           # Resumo completo
│   └── Lista de Doenças.txt        # Base de conhecimento
├── 🐍 versoes/python-tkinter/      # Versão desktop
│   ├── DiagnósticoSE.py            # Programa principal
│   └── README.md                   # Documentação específica
├── 🌐 versoes/python-web/          # Versão híbrida
│   ├── app.py                      # Servidor Flask
│   ├── requirements.txt            # Dependências Python
│   ├── templates/index.html        # Template HTML
│   ├── static/css/styles.css       # Estilos CSS
│   ├── static/js/script.js         # JavaScript
│   └── README.md                   # Documentação específica
└── 💻 versoes/web-puro/            # Versão frontend
    ├── index.html                  # Página principal
    ├── styles.css                  # Estilos CSS
    ├── script.js                   # JavaScript
    └── README.md                   # Documentação específica
```

## 🔄 Comandos Git

### 1. Verificar Status
```bash
git status
```

### 2. Adicionar Todos os Arquivos
```bash
git add .
```

### 3. Fazer Primeiro Commit
```bash
git commit -m "🎉 Versão inicial: Sistema de Diagnóstico Médico com 3 versões

- 🐍 Python Tkinter: Versão desktop tradicional
- 🌐 Python Web: Backend Flask + interface web
- 💻 Web Puro: Frontend standalone
- 📚 Documentação completa
- 🔧 Estrutura organizada por versões
- 📄 Licença educacional
- 🚨 Avisos de segurança médica"
```

### 4. Enviar para GitHub
```bash
git push -u origin main
```

## 🏷️ Tags e Releases

### Criar Tag da Versão
```bash
git tag -a v1.0.0 -m "🎉 Versão 1.0.0 - Sistema Completo"
git push origin v1.0.0
```

### Criar Release no GitHub
1. Vá para o repositório no GitHub
2. Clique em "Releases"
3. Clique em "Create a new release"
4. Selecione a tag v1.0.0
5. Adicione descrição:

```
# 🏥 Sistema de Diagnóstico Médico v1.0.0

## 🎉 Lançamento Inicial

Sistema especialista médico completo com **3 versões diferentes** para diferentes cenários de uso.

### 🐍 Python Tkinter
- Interface desktop tradicional
- Funciona offline
- Ideal para educação e desenvolvimento

### 🌐 Python Web  
- Backend Python Flask
- Interface web moderna
- API REST completa
- Ideal para produção

### 💻 Web Puro
- Frontend standalone
- Deploy instantâneo
- Ideal para demonstrações

## 📚 Documentação
- Guias completos para cada versão
- Comparação detalhada
- Instruções rápidas
- Exemplos práticos

## ⚠️ Aviso Importante
Este sistema é educacional apenas. Não substitui consulta médica profissional.
```

## 🔧 Configurações Adicionais

### .gitignore
O arquivo `.gitignore` já está configurado para:
- Arquivos Python (__pycache__, .pyc, etc.)
- Ambientes virtuais
- Logs e arquivos temporários
- Histórico de diagnósticos (dados sensíveis)
- Arquivos de IDE

### Branches Recomendadas
```bash
# Branch principal
git checkout -b main

# Branch de desenvolvimento
git checkout -b develop

# Branch para features
git checkout -b feature/nova-funcionalidade
```

## 📊 Métricas do Projeto

### Arquivos
- **Total**: ~20 arquivos
- **Código**: ~3.000 linhas
- **Documentação**: ~2.000 linhas
- **Versões**: 3 diferentes

### Funcionalidades
- **Doenças**: 16 suportadas
- **Algoritmo**: Diagnóstico por sintomas
- **Interface**: Desktop + Web + API
- **Persistência**: JSON + LocalStorage

## 🚀 Deploy Automático

### GitHub Pages (Web Puro)
1. Vá para Settings > Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: /versoes/web-puro
5. Save

### Netlify (Web Puro)
1. Conecte o repositório
2. Build command: (deixe vazio)
3. Publish directory: versoes/web-puro
4. Deploy

## 📞 Suporte

### Issues Template
Crie `.github/ISSUE_TEMPLATE.md`:
```markdown
## 🐛 Bug Report

### Descrição
[Descreva o problema]

### Passos para Reproduzir
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

### Comportamento Esperado
[O que deveria acontecer]

### Comportamento Atual
[O que está acontecendo]

### Versão
- [ ] Python Tkinter
- [ ] Python Web
- [ ] Web Puro

### Sistema Operacional
- [ ] Windows
- [ ] macOS
- [ ] Linux

### Navegador (se aplicável)
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
```

## 🎯 Próximos Passos

### Após o Deploy
1. ✅ Teste todas as versões
2. ✅ Verifique a documentação
3. ✅ Teste em diferentes dispositivos
4. ✅ Configure GitHub Pages
5. ✅ Crie release no GitHub

### Melhorias Futuras
- [ ] Adicionar testes automatizados
- [ ] Implementar CI/CD
- [ ] Adicionar mais doenças
- [ ] Melhorar algoritmo de diagnóstico
- [ ] Adicionar autenticação (Python Web)

---

**🎉 Parabéns! Seu projeto está pronto para o GitHub!** 