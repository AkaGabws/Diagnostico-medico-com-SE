# Sistema de Diagnóstico Médico - Versão Web

## 🌐 Visão Geral

Versão web moderna e responsiva do sistema de diagnóstico médico, desenvolvida com tecnologias web atuais para fornecer uma experiência de usuário superior e acessibilidade multiplataforma.

## ✨ Características da Versão Web

### 🎨 Interface Moderna
- **Design responsivo** que funciona em desktop, tablet e mobile
- **Interface intuitiva** com navegação clara e moderna
- **Animações suaves** e feedback visual
- **Tema consistente** com cores profissionais
- **Ícones Font Awesome** para melhor UX

### 🚀 Funcionalidades Avançadas
- **Validação em tempo real** dos campos
- **Histórico persistente** no navegador (LocalStorage)
- **Estatísticas dinâmicas** de uso
- **Modais informativos** para doenças e emergências
- **Loading spinner** durante processamento
- **Notificações toast** para feedback

### 📱 Responsividade
- **Mobile-first** design
- **Grid layout** adaptativo
- **Sidebar colapsável** em telas menores
- **Formulários otimizados** para touch

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com CSS Grid e Flexbox
- **JavaScript ES6+** - Lógica avançada com classes e módulos
- **Font Awesome 6** - Ícones profissionais
- **Google Fonts (Inter)** - Tipografia moderna

### Recursos
- **LocalStorage** - Persistência de dados
- **CSS Variables** - Sistema de design consistente
- **CSS Animations** - Transições suaves
- **Media Queries** - Responsividade completa

## 📁 Estrutura de Arquivos

```
web-version/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README_WEB.md       # Este arquivo
```

## 🚀 Como Executar

### Método 1: Servidor Local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Método 2: Abrir Diretamente
Simplesmente abra o arquivo `index.html` no navegador.

### Método 3: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

## 🎯 Como Usar

### 1. Preenchimento do Formulário
- **Nome**: Nome completo do paciente
- **Idade**: Idade em anos (1-150)
- **Sexo**: Seleção via radio buttons
- **Sintomas**: Descrição detalhada (um por linha ou separados por vírgulas)

### 2. Diagnóstico
- Clique em "Realizar Diagnóstico"
- Aguarde o processamento (spinner)
- Visualize o resultado com confiabilidade e recomendações

### 3. Funcionalidades Extras
- **Histórico**: Visualize diagnósticos anteriores
- **Lista de Doenças**: Consulte todas as condições suportadas
- **Estatísticas**: Veja dados de uso
- **Emergência**: Informações de contato para casos graves

## 📊 Funcionalidades Específicas da Web

### Validação Inteligente
- **Tempo real**: Validação enquanto digita
- **Feedback visual**: Campos com erro destacados
- **Mensagens específicas**: Erros claros e úteis

### Histórico Avançado
- **Persistência**: Dados salvos no navegador
- **Limpeza**: Opção de limpar histórico
- **Visualização**: Lista organizada por data

### Interface Adaptativa
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout otimizado
- **Mobile**: Layout vertical responsivo

### Modais Informativos
- **Doenças**: Lista completa com sintomas
- **Sobre**: Informações do sistema
- **Emergência**: Contatos e orientações

## 🎨 Sistema de Design

### Cores
- **Primária**: Azul (#2563eb)
- **Sucesso**: Verde (#10b981)
- **Aviso**: Amarelo (#f59e0b)
- **Erro**: Vermelho (#ef4444)
- **Info**: Ciano (#06b6d4)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Hierarquia**: Tamanhos bem definidos
- **Legibilidade**: Alto contraste

### Espaçamento
- **Sistema consistente**: Baseado em rem
- **Responsivo**: Adapta-se ao tamanho da tela
- **Harmônico**: Proporções equilibradas

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Adaptações
- **Grid**: Muda de 2 colunas para 1
- **Sidebar**: Move para baixo em telas menores
- **Formulário**: Campos empilhados em mobile
- **Modais**: Largura adaptativa

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --success-color: #10b981;
    /* ... outras cores */
}
```

### Fontes
Altere a fonte no CSS:
```css
:root {
    --font-family: 'Sua Fonte', sans-serif;
}
```

### Tamanhos
Ajuste espaçamentos:
```css
:root {
    --spacing-md: 1rem;
    --border-radius: 8px;
}
```

## 🚀 Melhorias Futuras

### Versão 3.0 Web
- **PWA**: Progressive Web App
- **Offline**: Funcionamento sem internet
- **Notificações**: Push notifications
- **Temas**: Modo escuro/claro
- **Exportação**: PDF/Excel dos resultados

### Integrações
- **APIs médicas**: Dados mais precisos
- **Machine Learning**: Diagnósticos mais inteligentes
- **Chatbot**: Interface conversacional
- **Telemedicina**: Integração com plataformas

## ⚠️ Considerações Importantes

### Segurança
- **Dados locais**: Informações ficam no navegador
- **Sem servidor**: Não há transmissão de dados
- **Privacidade**: Controle total dos dados

### Limitações
- **Base local**: Conhecimento limitado às 16 doenças
- **Sem IA**: Algoritmo baseado em correspondência
- **Educacional**: Não substitui consulta médica

### Compatibilidade
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Versões**: Suporte a navegadores modernos
- **JavaScript**: Requer JS habilitado

## 📞 Suporte

### Problemas Comuns
1. **Página não carrega**: Verifique se todos os arquivos estão na mesma pasta
2. **Estilos não aplicam**: Verifique se o CSS está sendo carregado
3. **JavaScript não funciona**: Verifique se JS está habilitado
4. **Histórico não salva**: Verifique se LocalStorage está disponível

### Desenvolvimento
- **Debug**: Use F12 para inspecionar
- **Console**: Verifique erros no console do navegador
- **Network**: Monitore carregamento de recursos

---

## 🎉 Conclusão

A versão web oferece uma experiência moderna e acessível, mantendo toda a funcionalidade do sistema original com melhorias significativas na usabilidade e design. Ideal para uso em qualquer dispositivo com navegador web.

**Desenvolvido com ❤️ para fins educacionais** 