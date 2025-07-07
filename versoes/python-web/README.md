# 🌐 Sistema de Diagnóstico Médico - Versão Python Web

> Versão híbrida com backend Python Flask + interface web moderna

## 🚀 Início Rápido

```bash
# Instalar dependências
pip install -r requirements.txt

# Executar servidor
python app.py

# Acessar no navegador
# http://localhost:5000
```

## 📋 Características

- ✅ **Backend Python** robusto e confiável
- ✅ **Interface web** moderna e responsiva
- ✅ **API REST** completa para integração
- ✅ **Múltiplos usuários** simultâneos
- ✅ **Histórico persistente** em JSON
- ✅ **Estatísticas em tempo real**
- ✅ **Logs detalhados** para monitoramento
- ✅ **Validação server-side** robusta

## 🎯 Casos de Uso Ideais

- 🏥 **Clínicas e hospitais** pequenos
- 🏢 **Empresas** com múltiplos usuários
- 🔬 **Pesquisa e desenvolvimento**
- 🌐 **Sistemas web** em produção
- 🔌 **Integração** com outros sistemas

## 📊 Funcionalidades

### 🔍 Diagnóstico
- **16 doenças** suportadas
- **Cálculo de confiabilidade** (0-100%)
- **Recomendações personalizadas**
- **Classificação de severidade**
- **Alternativas** de diagnóstico

### 🌐 Interface Web
- **Design responsivo** (mobile/desktop)
- **Validação em tempo real**
- **Modais informativos**
- **Notificações toast**
- **Loading spinner**
- **Histórico interativo**

### 🔌 API REST
- **POST /api/diagnosticar** - Realizar diagnóstico
- **GET /api/historico** - Obter histórico
- **POST /api/limpar-historico** - Limpar histórico
- **GET /api/estatisticas** - Obter estatísticas
- **GET /api/doencas** - Listar doenças

### 📈 Monitoramento
- **Logs detalhados** de acesso
- **Estatísticas** em tempo real
- **Métricas** de uso
- **Debug mode** para desenvolvimento

## 🛠️ Requisitos

- **Python 3.7+**
- **Flask 2.3+**
- **Werkzeug 2.3+**

## 📁 Estrutura

```
python-web/
├── app.py                    # Servidor Flask principal
├── templates/
│   └── index.html           # Template HTML
├── static/
│   ├── css/
│   │   └── styles.css       # Estilos CSS
│   └── js/
│       └── script.js        # JavaScript (API calls)
├── requirements.txt          # Dependências Python
└── README.md                # Esta documentação
```

## 🔧 Como Usar

### 1. Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd versoes/python-web

# Instale as dependências
pip install -r requirements.txt
```

### 2. Execução
```bash
# Modo desenvolvimento
python app.py

# Modo produção (recomendado)
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### 3. Acesso
- **Interface**: http://localhost:5000
- **API**: http://localhost:5000/api/

## 🔌 API Endpoints

### Realizar Diagnóstico
```bash
POST /api/diagnosticar
Content-Type: application/json

{
  "nome": "João Silva",
  "idade": "25",
  "sexo": "masculino",
  "sintomas": "febre alta, dor de cabeça, dores musculares"
}
```

### Obter Histórico
```bash
GET /api/historico
```

### Obter Estatísticas
```bash
GET /api/estatisticas
```

### Listar Doenças
```bash
GET /api/doencas
```

## 🏥 Base de Conhecimento

### Doenças Leves
- Resfriado, Alergia, Impetigo

### Doenças Moderadas  
- Gripe, Brucelose, Cistite, Coqueluche, Escarlatina, Gonorreia, Hanseníase, Diabetes

### Doenças Graves
- Botulismo, Cólera, Difteria, Febre Tifoide, Pneumonia

## 🔍 Algoritmo de Diagnóstico

1. **Validação** dos dados de entrada
2. **Normalização** dos sintomas informados
3. **Comparação** com sintomas das doenças
4. **Cálculo de confiabilidade** baseado na correspondência
5. **Seleção** da doença com maior confiabilidade (>30%)
6. **Geração** de recomendações personalizadas
7. **Persistência** no histórico

## 📊 Exemplo de Resposta da API

```json
{
  "sucesso": true,
  "resultado": {
    "diagnostico": "Gripe",
    "confiabilidade": 80.0,
    "recomendacoes": [
      "Repouso",
      "Hidratação", 
      "Medicamentos para febre"
    ],
    "procura_medico": false,
    "severidade": "moderada",
    "alternativas": ["Resfriado", "Febre Tifoide"]
  },
  "dados_paciente": {
    "nome": "João Silva",
    "idade": "25",
    "sexo": "masculino",
    "sintomas": ["febre alta", "dor de cabeça", "dores musculares"]
  }
}
```

## 🚀 Deploy em Produção

### Usando Gunicorn (Linux/Mac)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Usando Waitress (Windows)
```bash
pip install waitress
waitress-serve --host=0.0.0.0 --port=5000 app:app
```

### Usando Docker
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## 🔧 Configuração

### Variáveis de Ambiente
```bash
# Porta do servidor
export FLASK_PORT=5000

# Modo debug
export FLASK_DEBUG=True

# Host
export FLASK_HOST=0.0.0.0
```

### Configurações Avançadas
- **Rate Limiting**: Proteção contra spam
- **CORS**: Configurável para integração
- **Logs**: Detalhados para monitoramento
- **Validação**: Server-side robusta

## 🚨 Limitações

- ❌ **Requer servidor** web
- ❌ **Dependência** de internet (para interface)
- ❌ **Configuração** mais complexa
- ❌ **Recursos** de servidor necessários

## 🔄 Comparação com Outras Versões

| Aspecto | Python Tkinter | Python Web | Web Puro |
|---------|----------------|------------|----------|
| **Instalação** | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Interface** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **API** | ❌ | ✅ | ❌ |
| **Múltiplos usuários** | ❌ | ✅ | ✅ |
| **Escalabilidade** | ❌ | ✅ | ⚠️ |

## 🐛 Solução de Problemas

### Erro: "ModuleNotFoundError: No module named 'flask'"
```bash
pip install Flask
```

### Erro: "Address already in use"
```bash
# Mude a porta
python app.py --port 5001
```

### Erro: "Permission denied"
```bash
# Execute como administrador (Windows)
# ou com sudo (Linux/Mac)
```

### Interface não carrega
- Verifique se o servidor está rodando
- Confirme a URL: http://localhost:5000
- Verifique o console do navegador (F12)

## 📞 Suporte

- 📖 [Documentação Completa](../../docs/README_PYTHON_WEB.md)
- 🔧 [Instruções Rápidas](../../docs/INSTRUCOES_RAPIDAS.md)
- 📊 [Comparação de Versões](../../docs/COMPARACAO_VERSOES.md)

---

**⚠️ Aviso**: Este sistema é educacional apenas. Sempre consulte um profissional de saúde para diagnóstico real. 