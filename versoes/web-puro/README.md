# 💻 Sistema de Diagnóstico Médico - Versão Web Puro

> Versão frontend standalone com HTML, CSS e JavaScript puro

## 🚀 Início Rápido

```bash
# Abra o arquivo no navegador
# Clique duplo em index.html
# OU
# Arraste index.html para o navegador
```

## 📋 Características

- ✅ **Interface web** moderna e responsiva
- ✅ **Sem dependências** de servidor
- ✅ **Deploy instantâneo** em qualquer servidor
- ✅ **Funciona offline** após carregamento
- ✅ **Acesso universal** via navegador
- ✅ **Histórico persistente** no LocalStorage
- ✅ **Validação em tempo real**
- ✅ **Design profissional** com animações

## 🎯 Casos de Uso Ideais

- 🌐 **Demonstrações** e portfólios
- 📱 **Dispositivos móveis** (mobile-first)
- 🚀 **Deploy rápido** sem configuração
- 🎓 **Educação** e aprendizado
- 🔧 **Prototipagem** rápida
- 📊 **Apresentações** e workshops

## 📊 Funcionalidades

### 🔍 Diagnóstico
- **16 doenças** suportadas
- **Cálculo de confiabilidade** (0-100%)
- **Recomendações personalizadas**
- **Classificação de severidade**
- **Alternativas** de diagnóstico

### 🌐 Interface Web
- **Design responsivo** (mobile/desktop/tablet)
- **Validação em tempo real**
- **Modais informativos** (doenças, sobre, emergência)
- **Notificações toast** para feedback
- **Loading spinner** durante processamento
- **Histórico interativo** com LocalStorage
- **Animações suaves** e transições

### 🎨 Design
- **Tema médico** com cores apropriadas
- **Font Awesome** para ícones
- **Google Fonts** (Inter) para tipografia
- **CSS Grid** e Flexbox para layout
- **Media queries** para responsividade

## 🛠️ Requisitos

- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **JavaScript habilitado**
- **Conexão com internet** (apenas para carregar fontes/ícones)

## 📁 Estrutura

```
web-puro/
├── index.html                 # Página principal
├── styles.css                 # Estilos CSS
├── script.js                  # JavaScript ES6+
└── README.md                  # Esta documentação
```

## 🔧 Como Usar

### 1. Execução Local
```bash
# Método 1: Clique duplo
# Clique duas vezes no arquivo index.html

# Método 2: Arrastar
# Arraste index.html para o navegador

# Método 3: Servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Deploy em Servidor
```bash
# Qualquer servidor web (Apache, Nginx, etc.)
# GitHub Pages, Netlify, Vercel, etc.
```

### 3. Uso
1. **Preencha os dados** do paciente
2. **Digite os sintomas** (um por linha ou separados por vírgulas)
3. **Clique em "Realizar Diagnóstico"**
4. **Veja o resultado** com confiabilidade e recomendações

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
7. **Persistência** no LocalStorage

## 📊 Exemplo de Uso

```
Nome: Maria Santos
Idade: 30
Sexo: Feminino
Sintomas:
- coriza
- espirros
- dor de garganta
- congestão nasal

Resultado:
Diagnóstico: Resfriado
Confiabilidade: 100%
Severidade: Leve
Recomendações:
- Repouso
- Hidratação
- Descongestionante nasal
```

## 🚀 Deploy

### GitHub Pages
1. Faça upload dos arquivos para um repositório
2. Ative GitHub Pages nas configurações
3. Acesse via URL gerada

### Netlify
1. Arraste a pasta para netlify.com
2. Deploy automático
3. URL personalizada disponível

### Vercel
1. Conecte o repositório
2. Deploy automático
3. URL personalizada

### Servidor Web Tradicional
```bash
# Apache
# Coloque os arquivos em /var/www/html/

# Nginx
# Configure o diretório root
```

## 🎨 Personalização

### Cores
Edite `styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --success-color: #10b981;
  --danger-color: #ef4444;
  --warning-color: #f59e0b;
}
```

### Fontes
```html
<!-- No index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Ícones
```html
<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
```

## 🚨 Limitações

- ❌ **Sem backend** (lógica local apenas)
- ❌ **Sem API** para integração
- ❌ **Dados locais** (LocalStorage)
- ❌ **Sem autenticação** de usuários
- ❌ **Sem logs** de servidor

## 🔄 Comparação com Outras Versões

| Aspecto | Python Tkinter | Python Web | Web Puro |
|---------|----------------|------------|----------|
| **Instalação** | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Interface** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Deploy** | ❌ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Offline** | ✅ | ❌ | ✅ |
| **API** | ❌ | ✅ | ❌ |

## 🐛 Solução de Problemas

### Página não carrega
- Verifique se o arquivo `index.html` existe
- Confirme que JavaScript está habilitado
- Teste em outro navegador

### Estilos não aparecem
- Verifique se `styles.css` está na mesma pasta
- Confirme conexão com internet (para fontes)
- Verifique console do navegador (F12)

### JavaScript não funciona
- Verifique se `script.js` está na mesma pasta
- Confirme que JavaScript está habilitado
- Verifique console para erros

### Histórico não salva
- Verifique se LocalStorage está habilitado
- Confirme permissões do navegador
- Teste em modo privado/incógnito

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Teste em Diferentes Dispositivos
- 📱 Smartphones (iPhone, Android)
- 📱 Tablets (iPad, Android)
- 💻 Laptops e desktops
- 🖥️ Monitores grandes

## 🔧 Desenvolvimento

### Estrutura do JavaScript
```javascript
class SistemaDiagnosticoWeb {
  constructor() {
    this.baseDeConhecimento = { /* ... */ };
    this.historico = this.carregarHistorico();
  }
  
  diagnosticar(dados) { /* ... */ }
  calcularConfiabilidade(sintomas, doenca) { /* ... */ }
  salvarHistorico(diagnostico) { /* ... */ }
}
```

### Estrutura do CSS
```css
/* Layout responsivo */
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

/* Media queries */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

## 📞 Suporte

- 📖 [Documentação Completa](../../docs/README_WEB.md)
- 🔧 [Instruções Rápidas](../../docs/INSTRUCOES_RAPIDAS.md)
- 📊 [Comparação de Versões](../../docs/COMPARACAO_VERSOES.md)

---

**⚠️ Aviso**: Este sistema é educacional apenas. Sempre consulte um profissional de saúde para diagnóstico real. 