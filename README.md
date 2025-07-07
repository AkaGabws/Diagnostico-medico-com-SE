# 🏥 Sistema de Diagnóstico Médico - Versões Múltiplas

> Sistema especialista médico completo com 3 versões diferentes para diferentes cenários de uso

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3+-green.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-Educational-yellow.svg)](LICENSE)

## 📋 Visão Geral

Este projeto oferece um **sistema de diagnóstico médico** em **3 versões diferentes**, cada uma otimizada para cenários específicos:

- 🐍 **Python Tkinter** - Versão desktop tradicional
- 🌐 **Python Web** - Backend Python + Interface Web moderna  
- 💻 **Web Puro** - Frontend standalone

## 🚀 Início Rápido

### 🐍 Python Tkinter (Desktop)
```bash
cd versoes/python-tkinter
python DiagnósticoSE.py
```

### 🌐 Python Web (Híbrida)
```bash
cd versoes/python-web
pip install -r requirements.txt
python app.py
# Acesse: http://localhost:5000
```

### 💻 Web Puro (Frontend)
```bash
cd versoes/web-puro
# Abra index.html no navegador
```

## 📁 Estrutura do Projeto

```
Diagnostico-medico-com-SE/
├── 📄 README.md                    # README principal limpo
├── 📄 LICENSE                      # Licença educacional
├── 📄 .gitignore                   # Arquivos ignorados
├── 📄 GIT_SETUP.md                 # Instruções para Git
├── 📚 docs/                        # Documentação completa
├── 🐍 versoes/python-tkinter/      # Versão desktop
├── 🌐 versoes/python-web/          # Versão híbrida
└── 💻 versoes/web-puro/            # Versão frontend
```

## 🎯 Qual Versão Escolher?

| Cenário | Recomendação | Motivo |
|---------|--------------|--------|
| **Desenvolvimento/Offline** | Python Tkinter | Fácil instalação, funciona offline |
| **Produção/Múltiplos usuários** | Python Web | Interface moderna, API REST |
| **Demonstração/Portfólio** | Web Puro | Deploy instantâneo, universal |

## 🔧 Funcionalidades

### ✅ Todas as Versões
- **Diagnóstico por sintomas** (16 doenças)
- **Cálculo de confiabilidade** (0-100%)
- **Validação robusta** de dados
- **Histórico persistente**
- **Recomendações personalizadas**
- **Classificação de severidade**

### 🌐 Python Web (Extras)
- **API REST completa**
- **Estatísticas em tempo real**
- **Logs detalhados**
- **Modais informativos**
- **Notificações toast**

## 🏥 Base de Conhecimento

O sistema inclui **16 doenças** categorizadas por severidade:

- **Leves**: Resfriado, Alergia, Impetigo
- **Moderadas**: Gripe, Brucelose, Cistite, Coqueluche, Escarlatina, Gonorreia, Hanseníase, Diabetes  
- **Graves**: Botulismo, Cólera, Difteria, Febre Tifoide, Pneumonia

## 📚 Documentação

- **[Guia Completo](docs/COMPARACAO_VERSOES.md)** - Comparação detalhada das versões
- **[Instruções Rápidas](docs/INSTRUCOES_RAPIDAS.md)** - Como usar cada versão
- **[Exemplos de Uso](docs/exemplo_uso.md)** - Casos práticos
- **[Changelog](docs/CHANGELOG.md)** - Histórico de mudanças

## 🛠️ Tecnologias

- **Python 3.7+** - Lógica de diagnóstico
- **Flask** - Servidor web (Python Web)
- **HTML5/CSS3/JavaScript** - Interface web
- **Tkinter** - Interface desktop
- **JSON** - Persistência de dados

## 🚨 Aviso Importante

⚠️ **Este sistema é educacional apenas!**

- ❌ Não substitui consulta médica profissional
- ❌ Não use para diagnóstico real
- ✅ Sempre consulte um profissional de saúde
- ✅ Em emergências, procure atendimento imediato

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é educacional e não deve ser usado para diagnóstico médico real.

## 📞 Suporte

- 📖 [Documentação Completa](docs/)
- 🐛 [Issues](https://github.com/seu-usuario/Diagnostico-medico-com-SE/issues)
- 💬 [Discussions](https://github.com/seu-usuario/Diagnostico-medico-com-SE/discussions)

---

**🎯 Desenvolvido com ❤️ para fins educacionais** 