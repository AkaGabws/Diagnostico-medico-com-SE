# 🚀 Instruções Rápidas - Sistema de Diagnóstico Médico

## 📋 Visão Geral

Você tem **3 versões** disponíveis do sistema. Escolha a que melhor atende suas necessidades:

1. **🐍 Python Tkinter** - Desktop tradicional
2. **🌐 Python Web** - Backend Python + Interface Web  
3. **💻 Web Puro** - Frontend apenas

---

## 🐍 Versão Python Tkinter (Desktop)

### ✅ Para que serve:
- Uso offline
- Desenvolvimento rápido
- Ambientes educacionais
- Computadores sem navegador

### 🚀 Como usar:
```bash
# 1. Navegue até a pasta do projeto
cd Diagnostico-medico-com-SE

# 2. Execute o programa
python DiagnósticoSE.py
```

### 📱 O que acontece:
- Abre uma janela desktop
- Interface gráfica tradicional
- Funciona sem internet
- Salva histórico em JSON

---

## 🌐 Versão Python Web (Híbrida)

### ✅ Para que serve:
- Produção e uso real
- Múltiplos usuários
- Integração com outros sistemas
- Interface moderna

### 🚀 Como usar:
```bash
# 1. Instale o Flask (se necessário)
pip install Flask

# 2. Execute o servidor
python app.py

# 3. Abra no navegador
# http://localhost:5000
```

### 📱 O que acontece:
- Servidor Python roda na porta 5000
- Interface web moderna
- API REST disponível
- Histórico persistente

### 🔧 API disponível:
- `GET /api/estatisticas` - Ver estatísticas
- `GET /api/doencas` - Listar doenças
- `POST /api/diagnosticar` - Fazer diagnóstico
- `GET /api/historico` - Ver histórico

---

## 💻 Versão Web Puro (Frontend)

### ✅ Para que serve:
- Demonstração rápida
- Deploy em qualquer servidor
- Sem dependências de servidor
- Acesso universal

### 🚀 Como usar:
```bash
# 1. Abra o arquivo no navegador
# Clique duplo em index.html
# OU
# Arraste index.html para o navegador
```

### 📱 O que acontece:
- Abre diretamente no navegador
- Interface moderna e responsiva
- Funciona offline
- Histórico no LocalStorage

---

## 🎯 Qual versão escolher?

### 🏥 Para Clínicas/Hospitais:
**Recomendação: Python Web**
- Interface profissional
- Múltiplos usuários
- Histórico centralizado

### 🏫 Para Escolas/Universidades:
**Recomendação: Python Tkinter**
- Fácil instalação
- Funciona offline
- Ideal para laboratórios

### 🌐 Para Demonstrações:
**Recomendação: Web Puro**
- Deploy instantâneo
- Acesso universal
- Sem configuração

### 🔬 Para Desenvolvimento:
**Recomendação: Python Web**
- API para integração
- Logs detalhados
- Extensibilidade

---

## 🚨 Solução de Problemas

### ❌ Erro: "python não é reconhecido"
```bash
# Instale o Python primeiro:
# https://www.python.org/downloads/
```

### ❌ Erro: "ModuleNotFoundError: No module named 'flask'"
```bash
pip install Flask
```

### ❌ Erro: "Address already in use"
```bash
# Mude a porta ou pare outros serviços
python app.py --port 5001
```

### ❌ Interface não carrega
- Verifique se o servidor está rodando
- Confirme a URL: http://localhost:5000
- Verifique o console do navegador (F12)

---

## 📊 Comparação Rápida

| Aspecto | Tkinter | Python Web | Web Puro |
|---------|---------|------------|----------|
| **Instalação** | `python arquivo.py` | `pip install Flask` | Abrir no navegador |
| **Interface** | Desktop | Web moderna | Web moderna |
| **Offline** | ✅ | ❌ | ✅ |
| **API** | ❌ | ✅ | ❌ |
| **Múltiplos usuários** | ❌ | ✅ | ✅ |
| **Deploy** | Local | Servidor | Qualquer lugar |

---

## 🔧 Configuração Avançada

### Python Web - Variáveis de Ambiente:
```bash
# Porta personalizada
export FLASK_PORT=8080

# Modo debug
export FLASK_DEBUG=1

# Host personalizado
export FLASK_HOST=127.0.0.1
```

### Python Web - Deploy em Produção:
```bash
# Usando Gunicorn (Linux/Mac)
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Usando Waitress (Windows)
pip install waitress
waitress-serve --host=0.0.0.0 --port=5000 app:app
```

---

## 📞 Suporte

### Documentação Completa:
- **Python Tkinter**: `README.md`
- **Python Web**: `README_PYTHON_WEB.md`
- **Web Puro**: `README_WEB.md`
- **Comparação**: `COMPARACAO_VERSOES.md`

### Logs de Debug:
```bash
# Python Web - logs detalhados
export FLASK_DEBUG=1
python app.py
```

### Verificação de Saúde:
```bash
# Teste a API Python Web
curl http://localhost:5000/api/estatisticas
```

---

## ⚠️ Aviso Importante

**Este sistema é educacional apenas!**

- ❌ Não substitui consulta médica
- ❌ Não use para diagnóstico real
- ✅ Sempre consulte um profissional
- ✅ Em emergências, procure atendimento imediato

---

## 🎉 Pronto para usar!

Escolha sua versão preferida e comece a usar o sistema de diagnóstico médico. Todas as versões compartilham a mesma base de conhecimento e lógica de diagnóstico, garantindo resultados consistentes.

**Boa sorte e saúde! 🏥** 