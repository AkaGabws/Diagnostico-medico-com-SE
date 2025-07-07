# Exemplos de Uso - Sistema de Diagnóstico Médico

## 🎯 Cenários de Teste

### Exemplo 1: Gripe Comum
**Dados do Paciente:**
- Nome: João Silva
- Idade: 35
- Sexo: Masculino

**Sintomas:**
```
febre alta
dor de cabeça
dores musculares
tosse
fadiga
```

**Resultado Esperado:**
- Diagnóstico: Gripe
- Confiabilidade: ~100%
- Severidade: Moderada
- Recomendações: Repouso, Hidratação, Medicamentos para febre

### Exemplo 2: Resfriado
**Dados do Paciente:**
- Nome: Maria Santos
- Idade: 28
- Sexo: Feminino

**Sintomas:**
```
coriza, espirros, dor de garganta, congestão nasal
```

**Resultado Esperado:**
- Diagnóstico: Resfriado
- Confiabilidade: ~100%
- Severidade: Leve
- Recomendações: Repouso, Hidratação, Descongestionante nasal

### Exemplo 3: Caso Grave - Botulismo
**Dados do Paciente:**
- Nome: Pedro Costa
- Idade: 45
- Sexo: Masculino

**Sintomas:**
```
prisão de ventre
tontura
visão distorcida
dificuldade de abrir os olhos
fraqueza muscular
```

**Resultado Esperado:**
- Diagnóstico: Botulismo
- Confiabilidade: ~100%
- Severidade: Grave
- Recomendações: PROCURAR MÉDICO IMEDIATAMENTE, Tratamento de emergência necessário

### Exemplo 4: Sintomas Múltiplos (Diferentes Doenças)
**Dados do Paciente:**
- Nome: Ana Oliveira
- Idade: 42
- Sexo: Feminino

**Sintomas:**
```
febre alta
dor de cabeça
tosse com catarro
dificuldade para respirar
```

**Resultado Esperado:**
- Diagnóstico: Pneumonia (mais provável)
- Alternativas: Gripe
- Confiabilidade: ~80%
- Severidade: Grave
- Recomendações: PROCURAR MÉDICO IMEDIATAMENTE

### Exemplo 5: Sintomas Insuficientes
**Dados do Paciente:**
- Nome: Carlos Lima
- Idade: 30
- Sexo: Masculino

**Sintomas:**
```
dor de cabeça
```

**Resultado Esperado:**
- Diagnóstico: Não foi possível fazer um diagnóstico preciso
- Confiabilidade: Baixa
- Recomendações: Consulte um médico para avaliação completa

## 🔍 Testando Funcionalidades Avançadas

### Histórico de Diagnósticos
1. Execute vários diagnósticos
2. Clique em "Ver Histórico"
3. Verifique se os dados estão sendo salvos corretamente

### Validação de Dados
1. Tente submeter sem preencher campos obrigatórios
2. Teste com idade inválida (0, -1, 200)
3. Teste sem informar sintomas

### Interface
1. Teste o botão "Limpar" para resetar campos
2. Teste o botão "Sobre" para ver informações do sistema
3. Teste diferentes formatos de entrada de sintomas

## 📊 Dicas de Uso

### Para Melhores Resultados:
1. **Seja específico nos sintomas** - Use termos médicos comuns
2. **Informe múltiplos sintomas** - Quanto mais sintomas, melhor a precisão
3. **Considere a severidade** - Sintomas graves devem sempre ser avaliados por médicos
4. **Use o histórico** - Para acompanhar evolução de sintomas

### Limitações do Sistema:
- Base de conhecimento limitada (15 doenças)
- Não considera histórico médico do paciente
- Não avalia interações medicamentosas
- Não substitui avaliação profissional

## ⚠️ Casos de Emergência

**SEMPRE procure atendimento médico imediato se:**
- Sintomas muito graves
- Dificuldade para respirar
- Dor no peito
- Perda de consciência
- Hemorragias
- Febre muito alta (>40°C)

O sistema pode ajudar a identificar casos graves, mas nunca deve atrasar a busca por atendimento médico em emergências. 