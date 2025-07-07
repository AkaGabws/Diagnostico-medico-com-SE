# Sistema de Diagnóstico Médico - Versão Melhorada

## 📋 Descrição

Sistema especialista médico desenvolvido em Python com interface gráfica moderna para auxiliar no diagnóstico de doenças comuns. O sistema utiliza uma base de conhecimento estruturada e algoritmos de correspondência de sintomas para fornecer diagnósticos preliminares com níveis de confiabilidade.

## ✨ Características Principais

### 🎯 Funcionalidades
- **Interface moderna e intuitiva** com Tkinter
- **Base de conhecimento expandida** com 15 doenças
- **Cálculo de confiabilidade** do diagnóstico
- **Histórico de diagnósticos** persistente
- **Validação de dados** robusta
- **Recomendações personalizadas** por doença
- **Classificação de severidade** (leve, moderada, grave)
- **Alternativas de diagnóstico** quando aplicável

### 🏥 Doenças Suportadas
- Gripe
- Resfriado
- Alergia
- Botulismo
- Brucelose
- Cistite
- Cólera
- Coqueluche
- Difteria
- Escarlatina
- Febre Tifoide
- Gonorreia
- Hanseníase
- Impetigo
- Pneumonia
- Diabetes

## 🚀 Como Executar

### Pré-requisitos
- Python 3.7 ou superior
- Tkinter (geralmente incluído com Python)

### Instalação
1. Clone ou baixe o projeto
2. Navegue até a pasta do projeto
3. Execute o arquivo principal:

```bash
python DiagnósticoSE.py
```

## 🎮 Como Usar

1. **Preencha os dados do paciente:**
   - Nome
   - Idade
   - Sexo

2. **Informe os sintomas:**
   - Digite um sintoma por linha, ou
   - Separe por vírgulas

3. **Clique em "Realizar Diagnóstico"**

4. **Analise o resultado:**
   - Diagnóstico principal
   - Nível de confiabilidade
   - Severidade da condição
   - Recomendações específicas
   - Outras possibilidades (quando aplicável)

## 📊 Funcionalidades Avançadas

### Histórico de Diagnósticos
- Acesse através do botão "Ver Histórico"
- Visualize os últimos 20 diagnósticos
- Informações incluem data, nome, idade, diagnóstico e confiabilidade

### Validação Inteligente
- Verificação de campos obrigatórios
- Validação de idade (1-150 anos)
- Normalização de sintomas para melhor correspondência

### Algoritmo de Diagnóstico
- Comparação fuzzy de sintomas
- Cálculo de confiabilidade baseado em correspondência
- Threshold mínimo de 30% para considerar diagnóstico
- Ordenação por relevância

## ⚠️ Aviso Importante

**Este sistema é apenas uma ferramenta de apoio ao diagnóstico médico.**
- Não substitui a consulta com profissionais de saúde
- Sempre procure atendimento médico para confirmação
- Em casos de emergência, procure imediatamente um hospital
- O sistema não é responsável por diagnósticos definitivos

## 🛠️ Estrutura do Projeto

```
Diagnostico-medico-com-SE/
├── DiagnósticoSE.py          # Arquivo principal do sistema
├── Lista de Doenças.txt      # Lista das doenças suportadas
├── README.md                 # Este arquivo
└── historico_diagnosticos.json # Histórico (criado automaticamente)
```

## 🔧 Tecnologias Utilizadas

- **Python 3.7+**: Linguagem principal
- **Tkinter**: Interface gráfica
- **JSON**: Persistência de dados
- **Regex**: Normalização de texto
- **Datetime**: Controle de datas

## 📈 Melhorias Implementadas

### Versão 2.0 vs Versão Original
- ✅ Interface completamente redesenhada
- ✅ Base de conhecimento expandida (15 vs 14 doenças)
- ✅ Sistema de confiabilidade implementado
- ✅ Histórico de diagnósticos
- ✅ Validação robusta de dados
- ✅ Recomendações personalizadas
- ✅ Classificação de severidade
- ✅ Correção de bugs da versão original
- ✅ Documentação completa

## 🤝 Contribuições

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente suas melhorias
4. Teste adequadamente
5. Envie um pull request

## 📝 Licença

Este projeto é de uso educacional e não deve ser utilizado para diagnósticos médicos reais sem supervisão profissional.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório do projeto.

---

**Desenvolvido com ❤️ para fins educacionais** 