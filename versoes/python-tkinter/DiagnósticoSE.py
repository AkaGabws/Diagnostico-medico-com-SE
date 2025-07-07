import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext
import json
import datetime
from typing import List, Dict, Tuple
import re

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

class InterfaceDiagnostico:
    def __init__(self):
        self.sistema = SistemaEspecialistaMedico()
        self.setup_interface()

    def setup_interface(self):
        self.janela = tk.Tk()
        self.janela.title("Sistema de Diagnóstico Médico - Versão Melhorada")
        self.janela.geometry("800x700")
        self.janela.configure(bg='#f0f0f0')
        
        # Estilo
        style = ttk.Style()
        style.theme_use('clam')
        
        # Frame principal
        main_frame = ttk.Frame(self.janela, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Título
        titulo = ttk.Label(main_frame, text="Sistema de Diagnóstico Médico", 
                          font=('Arial', 16, 'bold'))
        titulo.pack(pady=(0, 20))
        
        # Frame de entrada de dados
        dados_frame = ttk.LabelFrame(main_frame, text="Dados do Paciente", padding="10")
        dados_frame.pack(fill=tk.X, pady=(0, 20))
        
        # Nome
        ttk.Label(dados_frame, text="Nome:").grid(row=0, column=0, sticky=tk.W, pady=5)
        self.nome_entry = ttk.Entry(dados_frame, width=30)
        self.nome_entry.grid(row=0, column=1, padx=(10, 0), pady=5)
        
        # Idade
        ttk.Label(dados_frame, text="Idade:").grid(row=1, column=0, sticky=tk.W, pady=5)
        self.idade_entry = ttk.Entry(dados_frame, width=10)
        self.idade_entry.grid(row=1, column=1, sticky=tk.W, padx=(10, 0), pady=5)
        
        # Sexo
        ttk.Label(dados_frame, text="Sexo:").grid(row=2, column=0, sticky=tk.W, pady=5)
        self.sexo_var = tk.StringVar(value="masculino")
        sexo_frame = ttk.Frame(dados_frame)
        sexo_frame.grid(row=2, column=1, sticky=tk.W, padx=(10, 0), pady=5)
        ttk.Radiobutton(sexo_frame, text="Masculino", variable=self.sexo_var, 
                       value="masculino").pack(side=tk.LEFT)
        ttk.Radiobutton(sexo_frame, text="Feminino", variable=self.sexo_var, 
                       value="feminino").pack(side=tk.LEFT, padx=(10, 0))
        
        # Sintomas
        ttk.Label(dados_frame, text="Sintomas:").grid(row=3, column=0, sticky=tk.W, pady=5)
        sintomas_frame = ttk.Frame(dados_frame)
        sintomas_frame.grid(row=3, column=1, sticky=tk.W, padx=(10, 0), pady=5)
        
        self.sintomas_text = scrolledtext.ScrolledText(sintomas_frame, width=40, height=4)
        self.sintomas_text.pack()
        ttk.Label(sintomas_frame, text="Digite um sintoma por linha ou separe por vírgulas", 
                 font=('Arial', 8)).pack()
        
        # Botão de diagnóstico
        ttk.Button(main_frame, text="Realizar Diagnóstico", 
                  command=self.fazer_diagnostico).pack(pady=20)
        
        # Frame de resultados
        self.resultado_frame = ttk.LabelFrame(main_frame, text="Resultado do Diagnóstico", padding="10")
        self.resultado_frame.pack(fill=tk.BOTH, expand=True)
        
        self.resultado_text = scrolledtext.ScrolledText(self.resultado_frame, height=15)
        self.resultado_text.pack(fill=tk.BOTH, expand=True)
        
        # Botões adicionais
        botoes_frame = ttk.Frame(main_frame)
        botoes_frame.pack(pady=20)
        
        ttk.Button(botoes_frame, text="Ver Histórico", 
                  command=self.mostrar_historico).pack(side=tk.LEFT, padx=5)
        ttk.Button(botoes_frame, text="Limpar", 
                  command=self.limpar_campos).pack(side=tk.LEFT, padx=5)
        ttk.Button(botoes_frame, text="Sobre", 
                  command=self.mostrar_sobre).pack(side=tk.LEFT, padx=5)

    def validar_campos(self) -> bool:
        """Valida os campos de entrada"""
        if not self.nome_entry.get().strip():
            messagebox.showerror("Erro", "Por favor, informe seu nome.")
            return False
        
        if not self.idade_entry.get().strip():
            messagebox.showerror("Erro", "Por favor, informe sua idade.")
            return False
        
        try:
            idade = int(self.idade_entry.get())
            if idade <= 0 or idade > 150:
                raise ValueError()
        except ValueError:
            messagebox.showerror("Erro", "Por favor, informe uma idade válida.")
            return False
        
        sintomas = self.obter_sintomas()
        if not sintomas:
            messagebox.showerror("Erro", "Por favor, informe pelo menos um sintoma.")
            return False
        
        return True

    def obter_sintomas(self) -> List[str]:
        """Extrai sintomas do campo de texto"""
        texto = self.sintomas_text.get("1.0", tk.END).strip()
        if not texto:
            return []
        
        # Tenta separar por vírgulas primeiro
        if "," in texto:
            sintomas = [s.strip() for s in texto.split(",") if s.strip()]
        else:
            # Se não há vírgulas, separa por linhas
            sintomas = [s.strip() for s in texto.split("\n") if s.strip()]
        
        return sintomas

    def fazer_diagnostico(self):
        """Realiza o diagnóstico"""
        if not self.validar_campos():
            return
        
        nome = self.nome_entry.get().strip()
        idade = self.idade_entry.get().strip()
        sexo = self.sexo_var.get()
        sintomas = self.obter_sintomas()
        
        # Mostra indicador de processamento
        self.resultado_text.delete("1.0", tk.END)
        self.resultado_text.insert("1.0", "Analisando sintomas...\n")
        self.janela.update()
        
        # Realiza diagnóstico
        resultado = self.sistema.diagnosticar(sintomas, sexo, nome, idade)
        
        # Exibe resultado
        self.exibir_resultado(resultado, nome)

    def exibir_resultado(self, resultado: Dict, nome: str):
        """Exibe o resultado do diagnóstico de forma formatada"""
        self.resultado_text.delete("1.0", tk.END)
        
        # Cabeçalho
        self.resultado_text.insert(tk.END, f"📋 DIAGNÓSTICO PARA: {nome.upper()}\n")
        self.resultado_text.insert(tk.END, "=" * 50 + "\n\n")
        
        # Diagnóstico principal
        self.resultado_text.insert(tk.END, f"🔍 DIAGNÓSTICO: {resultado['diagnostico']}\n")
        
        # Confiabilidade
        if resultado['confiabilidade'] > 0:
            self.resultado_text.insert(tk.END, f"📊 CONFIABILIDADE: {resultado['confiabilidade']:.1f}%\n")
        
        # Severidade
        if resultado['severidade'] != "indefinida":
            self.resultado_text.insert(tk.END, f"⚠️  SEVERIDADE: {resultado['severidade'].upper()}\n")
        
        self.resultado_text.insert(tk.END, "\n")
        
        # Recomendações
        self.resultado_text.insert(tk.END, "💡 RECOMENDAÇÕES:\n")
        for rec in resultado['recomendacoes']:
            self.resultado_text.insert(tk.END, f"• {rec}\n")
        
        # Alternativas
        if resultado.get('alternativas'):
            self.resultado_text.insert(tk.END, "\n🔍 OUTRAS POSSIBILIDADES:\n")
            for alt in resultado['alternativas']:
                self.resultado_text.insert(tk.END, f"• {alt}\n")
        
        # Aviso importante
        self.resultado_text.insert(tk.END, "\n" + "=" * 50 + "\n")
        self.resultado_text.insert(tk.END, "⚠️  AVISO IMPORTANTE:\n")
        self.resultado_text.insert(tk.END, "Este é um sistema de apoio ao diagnóstico. ")
        self.resultado_text.insert(tk.END, "Sempre consulte um profissional de saúde para ")
        self.resultado_text.insert(tk.END, "confirmação e tratamento adequado.\n")
        
        # Configurar cores
        self.resultado_text.tag_configure("titulo", foreground="blue", font=("Arial", 10, "bold"))
        self.resultado_text.tag_configure("importante", foreground="red", font=("Arial", 9, "bold"))
        
        # Aplicar tags
        self.resultado_text.tag_add("titulo", "1.1", "1.50")
        self.resultado_text.tag_add("importante", "end-4l", "end")

    def mostrar_historico(self):
        """Mostra o histórico de diagnósticos"""
        if not self.sistema.historico_diagnosticos:
            messagebox.showinfo("Histórico", "Nenhum diagnóstico realizado ainda.")
            return
        
        historico_window = tk.Toplevel(self.janela)
        historico_window.title("Histórico de Diagnósticos")
        historico_window.geometry("600x400")
        
        # Criar Treeview para o histórico
        columns = ("Data", "Nome", "Idade", "Diagnóstico", "Confiança")
        tree = ttk.Treeview(historico_window, columns=columns, show="headings")
        
        for col in columns:
            tree.heading(col, text=col)
            tree.column(col, width=100)
        
        # Adicionar dados
        for diag in reversed(self.sistema.historico_diagnosticos[-20:]):  # Últimos 20
            data = datetime.datetime.fromisoformat(diag["data"]).strftime("%d/%m/%Y %H:%M")
            tree.insert("", "end", values=(
                data,
                diag["nome"],
                diag["idade"],
                diag["diagnostico"],
                f"{diag['confiabilidade']:.1f}%"
            ))
        
        tree.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)

    def limpar_campos(self):
        """Limpa todos os campos"""
        self.nome_entry.delete(0, tk.END)
        self.idade_entry.delete(0, tk.END)
        self.sintomas_text.delete("1.0", tk.END)
        self.resultado_text.delete("1.0", tk.END)

    def mostrar_sobre(self):
        """Mostra informações sobre o sistema"""
        sobre_texto = """
Sistema de Diagnóstico Médico - Versão Melhorada

Desenvolvido com Python e Tkinter

Características:
• Interface moderna e intuitiva
• Base de conhecimento expandida
• Cálculo de confiabilidade do diagnóstico
• Histórico de diagnósticos
• Validação de dados
• Recomendações personalizadas

⚠️  IMPORTANTE:
Este sistema é apenas uma ferramenta de apoio.
Sempre consulte um profissional de saúde para
diagnósticos definitivos e tratamentos adequados.

Versão: 2.0
        """
        messagebox.showinfo("Sobre o Sistema", sobre_texto)

    def executar(self):
        """Executa a aplicação"""
        self.janela.mainloop()

if __name__ == "__main__":
    app = InterfaceDiagnostico()
    app.executar()
