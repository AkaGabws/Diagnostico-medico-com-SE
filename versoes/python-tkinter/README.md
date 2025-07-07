# 🐍 Sistema de Diagnóstico Médico - Versão Python Tkinter

> Versão desktop tradicional com interface gráfica Tkinter

## 🚀 Início Rápido

```bash
python DiagnósticoSE.py
```

## 📋 Características

- ✅ **Interface desktop** tradicional
- ✅ **Funciona offline** sem internet
- ✅ **Sem dependências** externas
- ✅ **Fácil instalação** e execução
- ✅ **Histórico persistente** em JSON
- ✅ **Validação robusta** de dados
- ✅ **Cálculo de confiabilidade** do diagnóstico

## 🎯 Casos de Uso Ideais

- 🏫 **Ambientes educacionais** (escolas, universidades)
- 💻 **Desenvolvimento** e testes rápidos
- 🔒 **Sistemas offline** sem acesso à internet
- 🖥️ **Computadores** sem navegador web
- 🧪 **Laboratórios** de informática

## 📊 Funcionalidades

### 🔍 Diagnóstico
- **16 doenças** suportadas
- **Cálculo de confiabilidade** (0-100%)
- **Recomendações personalizadas**
- **Classificação de severidade**

### 📝 Interface
- **Formulário intuitivo** para dados do paciente
- **Validação em tempo real**
- **Exibição clara** dos resultados
- **Histórico de consultas**

### 💾 Persistência
- **Histórico salvo** em JSON
- **Dados persistentes** entre sessões
- **Backup automático** dos dados

## 🛠️ Requisitos

- **Python 3.7+**
- **Tkinter** (geralmente incluído com Python)

### Instalação do Tkinter (se necessário)

**Ubuntu/Debian:**
```bash
sudo apt-get install python3-tk
```

**Windows/macOS:**
- Geralmente já incluído com Python

## 📁 Estrutura

```
python-tkinter/
├── DiagnósticoSE.py          # Programa principal
└── README.md                 # Esta documentação
```

## 🔧 Como Usar

1. **Execute o programa:**
   ```bash
   python DiagnósticoSE.py
   ```

2. **Preencha os dados:**
   - Nome completo
   - Idade
   - Sexo
   - Sintomas (um por linha)

3. **Clique em "Realizar Diagnóstico"**

4. **Veja o resultado:**
   - Diagnóstico sugerido
   - Confiabilidade (%)
   - Recomendações
   - Severidade

## 🏥 Base de Conhecimento

### Doenças Leves
- Resfriado, Alergia, Impetigo

### Doenças Moderadas  
- Gripe, Brucelose, Cistite, Coqueluche, Escarlatina, Gonorreia, Hanseníase, Diabetes

### Doenças Graves
- Botulismo, Cólera, Difteria, Febre Tifoide, Pneumonia

## 🔍 Algoritmo de Diagnóstico

1. **Normalização** dos sintomas informados
2. **Comparação** com sintomas das doenças
3. **Cálculo de confiabilidade** baseado na correspondência
4. **Seleção** da doença com maior confiabilidade (>30%)
5. **Geração** de recomendações personalizadas

## 📊 Exemplo de Uso

```
Nome: João Silva
Idade: 25
Sexo: Masculino
Sintomas:
- febre alta
- dor de cabeça
- dores musculares
- tosse

Resultado:
Diagnóstico: Gripe
Confiabilidade: 80%
Severidade: Moderada
Recomendações:
- Repouso
- Hidratação
- Medicamentos para febre
```

## 🚨 Limitações

- ❌ **Interface básica** (Tkinter)
- ❌ **Não responsiva** (apenas desktop)
- ❌ **Sem API** para integração
- ❌ **Visual limitado** pelas restrições do Tkinter

## 🔄 Comparação com Outras Versões

| Aspecto | Python Tkinter | Python Web | Web Puro |
|---------|----------------|------------|----------|
| **Instalação** | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Interface** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Offline** | ✅ | ❌ | ✅ |
| **API** | ❌ | ✅ | ❌ |
| **Responsividade** | ❌ | ✅ | ✅ |

## 🐛 Solução de Problemas

### Erro: "No module named 'tkinter'"
```bash
# Ubuntu/Debian
sudo apt-get install python3-tk

# Windows/macOS - Reinstale Python com Tkinter
```

### Erro: "Permission denied"
```bash
# Execute como administrador (Windows)
# ou com sudo (Linux/Mac)
```

### Interface não abre
- Verifique se Python está instalado
- Confirme que Tkinter está disponível
- Execute no terminal para ver erros

## 📞 Suporte

- 📖 [Documentação Completa](../../docs/README_PYTHON_TKINTER.md)
- 🔧 [Instruções Rápidas](../../docs/INSTRUCOES_RAPIDAS.md)
- 📊 [Comparação de Versões](../../docs/COMPARACAO_VERSOES.md)

---

**⚠️ Aviso**: Este sistema é educacional apenas. Sempre consulte um profissional de saúde para diagnóstico real. 