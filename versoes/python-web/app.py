from flask import Flask, render_template, request, jsonify
import json
import datetime
import re
from typing import List, Dict
import os

app = Flask(__name__)

class SistemaEspecialistaMedico:
    def __init__(self):
        self.base_de_conhecimento = {
            "Gripe": {
                "sintomas": ["febre alta", "dor de cabeça", "dores musculares", "tosse", "fadiga"],
                "severidade": "moderada",
                "recomendacoes": ["Repouso", "Hidratação", "Medicamentos para febre"],
                "procura_medico": False
            },
            "Resfriado": {
                "sintomas": ["coriza", "espirros", "dor de garganta", "congestão nasal"],
                "severidade": "leve",
                "recomendacoes": ["Repouso", "Hidratação", "Descongestionante nasal"],
                "procura_medico": False
            },
            "Alergia": {
                "sintomas": ["coceira nos olhos", "espirros", "nariz entupido", "coriza clara"],
                "severidade": "leve",
                "recomendacoes": ["Antialérgicos", "Evitar alérgenos", "Lavar nariz"],
                "procura_medico": False
            },
            "Botulismo": {
                "sintomas": ["prisão de ventre", "tontura", "visão distorcida", "dificuldade de abrir os olhos", "fraqueza muscular"],
                "severidade": "grave",
                "recomendacoes": ["PROCURAR MÉDICO IMEDIATAMENTE", "Tratamento de emergência necessário"],
                "procura_medico": True
            },
            "Brucelose": {
                "sintomas": ["calafrio", "dor de cabeça", "cansaço", "febre", "suor noturno"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos", "Repouso", "Acompanhamento médico"],
                "procura_medico": True
            },
            "Cistite": {
                "sintomas": ["vontade frequente de urinar", "ardor ao urinar", "febre", "dor pélvica"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos", "Hidratação", "Acompanhamento médico"],
                "procura_medico": True
            },
            "Cólera": {
                "sintomas": ["diarreia", "desidratação", "vômitos", "fraqueza", "cãibras"],
                "severidade": "grave",
                "recomendacoes": ["PROCURAR MÉDICO IMEDIATAMENTE", "Hidratação oral", "Tratamento de emergência"],
                "procura_medico": True
            },
            "Coqueluche": {
                "sintomas": ["febre", "espirro", "mal-estar", "tosse seca prolongada", "tosse convulsiva"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos", "Repouso", "Acompanhamento médico"],
                "procura_medico": True
            },
            "Difteria": {
                "sintomas": ["dor de garganta", "aparecimento de placas nas amígdalas", "febre", "mal-estar", "dificuldade para engolir"],
                "severidade": "grave",
                "recomendacoes": ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Tratamento de emergência"],
                "procura_medico": True
            },
            "Escarlatina": {
                "sintomas": ["manchas vermelhas na pele", "febre alta", "dor de garganta", "dores musculares", "língua vermelha"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos", "Repouso", "Acompanhamento médico"],
                "procura_medico": True
            },
            "Febre Tifoide": {
                "sintomas": ["febre alta prolongada", "dor de cabeça", "náuseas", "falta de apetite", "diarreia"],
                "severidade": "grave",
                "recomendacoes": ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Tratamento hospitalar"],
                "procura_medico": True
            },
            "Gonorreia": {
                "sintomas": ["dor e ardor ao urinar", "sangramentos", "corrimento amarelado", "dor pélvica"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos", "Acompanhamento médico", "Tratamento do parceiro"],
                "procura_medico": True
            },
            "Hanseníase": {
                "sintomas": ["manchas na pele", "inchaço nas mãos e pés", "perda de força muscular", "formigamento"],
                "severidade": "moderada",
                "recomendacoes": ["Antibióticos específicos", "Acompanhamento médico", "Tratamento prolongado"],
                "procura_medico": True
            },
            "Impetigo": {
                "sintomas": ["bolhas", "dor", "úlceras", "coceira", "feridas com crosta"],
                "severidade": "leve",
                "recomendacoes": ["Antibióticos tópicos", "Higiene local", "Acompanhamento médico"],
                "procura_medico": True
            },
            "Pneumonia": {
                "sintomas": ["febre alta", "tosse com catarro", "dificuldade para respirar", "dor no peito", "fadiga"],
                "severidade": "grave",
                "recomendacoes": ["PROCURAR MÉDICO IMEDIATAMENTE", "Antibióticos", "Possível internação"],
                "procura_medico": True
            },
            "Diabetes": {
                "sintomas": ["sede excessiva", "vontade frequente de urinar", "fome excessiva", "perda de peso", "fadiga"],
                "severidade": "moderada",
                "recomendacoes": ["Acompanhamento médico", "Controle glicêmico", "Dieta adequada"],
                "procura_medico": True
            }
        }
        
        self.historico_diagnosticos = []
        self.carregar_historico()

    def carregar_historico(self):
        try:
            with open('historico_diagnosticos.json', 'r', encoding='utf-8') as f:
                self.historico_diagnosticos = json.load(f)
        except FileNotFoundError:
            self.historico_diagnosticos = []

    def salvar_historico(self):
        with open('historico_diagnosticos.json', 'w', encoding='utf-8') as f:
            json.dump(self.historico_diagnosticos, f, ensure_ascii=False, indent=2)

    def normalizar_sintoma(self, sintoma: str) -> str:
        """Normaliza o sintoma para comparação"""
        return re.sub(r'[^\w\s]', '', sintoma.lower().strip())

    def calcular_confiabilidade(self, sintomas_paciente: List[str], sintomas_doenca: List[str]) -> float:
        """Calcula a confiabilidade do diagnóstico baseado na correspondência de sintomas"""
        sintomas_paciente_norm = [self.normalizar_sintoma(s) for s in sintomas_paciente]
        sintomas_doenca_norm = [self.normalizar_sintoma(s) for s in sintomas_doenca]
        
        matches = sum(1 for s in sintomas_paciente_norm if any(s in doenca or doenca in s for doenca in sintomas_doenca_norm))
        return (matches / len(sintomas_doenca_norm)) * 100

    def diagnosticar(self, sintomas: List[str], sexo: str, nome: str, idade: str) -> Dict:
        """Realiza o diagnóstico e retorna informações detalhadas"""
        sintomas = [s.strip() for s in sintomas if s.strip()]
        
        if not sintomas:
            return {
                "diagnostico": "Nenhum sintoma informado",
                "confiabilidade": 0,
                "recomendacoes": ["Por favor, informe seus sintomas"],
                "procura_medico": False,
                "severidade": "indefinida"
            }

        melhores_matches = []
        
        for doenca, info in self.base_de_conhecimento.items():
            confiabilidade = self.calcular_confiabilidade(sintomas, info["sintomas"])
            if confiabilidade > 30:  # Threshold mínimo
                melhores_matches.append({
                    "doenca": doenca,
                    "confiabilidade": confiabilidade,
                    "info": info
                })
        
        # Ordena por confiabilidade
        melhores_matches.sort(key=lambda x: x["confiabilidade"], reverse=True)
        
        if melhores_matches:
            melhor_match = melhores_matches[0]
            
            # Salva no histórico
            diagnostico_info = {
                "data": datetime.datetime.now().isoformat(),
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "sintomas": sintomas,
                "diagnostico": melhor_match["doenca"],
                "confiabilidade": melhor_match["confiabilidade"],
                "severidade": melhor_match["info"]["severidade"]
            }
            self.historico_diagnosticos.append(diagnostico_info)
            self.salvar_historico()
            
            return {
                "diagnostico": melhor_match["doenca"],
                "confiabilidade": melhor_match["confiabilidade"],
                "recomendacoes": melhor_match["info"]["recomendacoes"],
                "procura_medico": melhor_match["info"]["procura_medico"],
                "severidade": melhor_match["info"]["severidade"],
                "alternativas": [m["doenca"] for m in melhores_matches[1:3]] if len(melhores_matches) > 1 else []
            }
        
        return {
            "diagnostico": "Não foi possível fazer um diagnóstico preciso",
            "confiabilidade": 0,
            "recomendacoes": ["Consulte um médico para avaliação completa"],
            "procura_medico": True,
            "severidade": "indefinida"
        }

    def obter_estatisticas(self):
        """Retorna estatísticas do sistema"""
        hoje = datetime.datetime.now().date()
        diagnosticos_hoje = sum(1 for d in self.historico_diagnosticos 
                               if datetime.datetime.fromisoformat(d["data"]).date() == hoje)
        
        return {
            "total_doencas": len(self.base_de_conhecimento),
            "diagnosticos_hoje": diagnosticos_hoje,
            "total_historico": len(self.historico_diagnosticos),
            "versao": "2.0 Python Web"
        }

# Instância global do sistema
sistema = SistemaEspecialistaMedico()

@app.route('/')
def index():
    """Página principal"""
    return render_template('index.html')

@app.route('/api/diagnosticar', methods=['POST'])
def api_diagnosticar():
    """API para realizar diagnóstico"""
    try:
        data = request.get_json()
        
        # Validação dos dados
        if not data:
            return jsonify({"erro": "Dados não fornecidos"}), 400
        
        nome = data.get('nome', '').strip()
        idade = data.get('idade', '').strip()
        sexo = data.get('sexo', 'masculino')
        sintomas_texto = data.get('sintomas', '').strip()
        
        # Validações
        if not nome or len(nome) < 2:
            return jsonify({"erro": "Nome deve ter pelo menos 2 caracteres"}), 400
        
        try:
            idade_int = int(idade)
            if idade_int < 1 or idade_int > 150:
                return jsonify({"erro": "Idade deve ser entre 1 e 150 anos"}), 400
        except ValueError:
            return jsonify({"erro": "Idade deve ser um número válido"}), 400
        
        if not sintomas_texto or len(sintomas_texto) < 3:
            return jsonify({"erro": "Descreva pelo menos um sintoma"}), 400
        
        # Extrair sintomas
        if "," in sintomas_texto:
            sintomas = [s.strip() for s in sintomas_texto.split(",") if s.strip()]
        else:
            sintomas = [s.strip() for s in sintomas_texto.split("\n") if s.strip()]
        
        # Realizar diagnóstico
        resultado = sistema.diagnosticar(sintomas, sexo, nome, idade)
        
        return jsonify({
            "sucesso": True,
            "resultado": resultado,
            "dados_paciente": {
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "sintomas": sintomas
            }
        })
        
    except Exception as e:
        return jsonify({"erro": f"Erro interno: {str(e)}"}), 500

@app.route('/api/historico')
def api_historico():
    """API para obter histórico de diagnósticos"""
    try:
        # Retorna os últimos 20 diagnósticos
        historico_recente = sistema.historico_diagnosticos[-20:] if len(sistema.historico_diagnosticos) > 20 else sistema.historico_diagnosticos
        return jsonify({
            "sucesso": True,
            "historico": historico_recente
        })
    except Exception as e:
        return jsonify({"erro": f"Erro ao carregar histórico: {str(e)}"}), 500

@app.route('/api/limpar-historico', methods=['POST'])
def api_limpar_historico():
    """API para limpar histórico"""
    try:
        sistema.historico_diagnosticos = []
        sistema.salvar_historico()
        return jsonify({"sucesso": True, "mensagem": "Histórico limpo com sucesso"})
    except Exception as e:
        return jsonify({"erro": f"Erro ao limpar histórico: {str(e)}"}), 500

@app.route('/api/estatisticas')
def api_estatisticas():
    """API para obter estatísticas"""
    try:
        return jsonify({
            "sucesso": True,
            "estatisticas": sistema.obter_estatisticas()
        })
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter estatísticas: {str(e)}"}), 500

@app.route('/api/doencas')
def api_doencas():
    """API para obter lista de doenças"""
    try:
        return jsonify({
            "sucesso": True,
            "doencas": sistema.base_de_conhecimento
        })
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter doenças: {str(e)}"}), 500

if __name__ == '__main__':
    print("🚀 Iniciando Sistema de Diagnóstico Médico - Versão Python Web")
    print("📱 Acesse: http://localhost:5000")
    print("🔧 API disponível em: http://localhost:5000/api/")
    print("⚠️  Lembre-se: Este é um sistema educacional!")
    print("-" * 60)
    
    app.run(debug=True, host='0.0.0.0', port=5000) 