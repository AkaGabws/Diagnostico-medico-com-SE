import tkinter as tk

class SistemaEspecialistaMedico:
    def __init__(self):
        self.base_de_conhecimento = {
            "Gripe": ["febre alta", "dor de cabeça", "dores musculares"],
            "Resfriado": ["coriza", "espirros", "dor de garganta"],
            "Alergia": ["coceira nos olhos", "espirros", "nariz entupido"],
            "Botulismo": ["prisão de ventre", "tontura", "visão distorcida", "dificuldade de abrir os olhos"],
            "Brucelose": ["calafrio", "dor de cabeça", "cansaço", "febre"],
            "Cistite": ["vontade frequente de urinar", "ardor ao urinar", "febre"],
            "Cólera": ["diarreia", "desidratação", "vômitos", "fraqueza"],
            "Coqueluche": ["febre", "espirro", "mal-estar", "tosse seca prolongada"],
            "Difteria": ["dor de garganta", "aparecimento de placas nas amígdalas", "febre", "mal-estar"],
            "Escarlatina": ["manchas vermelhas na pele", "febre alta", "dor de garganta", "dores musculares"],
            "Febre Tifoide": ["febre alta prolongada", "dor de cabeça", "náuseas", "falta de apetite"],
            "Gonorreia": ["dor e ardor ao urinar", "sangramentos", "corrimento amarelado"],
            "Hanseníase": ["manchas na pele", "inchaço nas mãos e pés", "perda de força muscular"],
            "Impetigo": ["bolhas", "dor", "úlceras"],
        }

    def diagnosticar(self, sintomas, sexo, nome):
        for condicao, regras in self.base_de_conhecimento.items():
            if all(sintoma in sintomas for sintoma in regras):
                if (con
                    (sexo == "masculino" and condicao == "") or
                    (sexo == "feminino" and condicao == "")
                ):
                    return f"Desculpe, {nome}, você não pode ter esta condição. Por favor, verifique seus sintomas."
                return f"{nome} você pode ter {condicao}."

        return "Não foi possível fazer um diagnóstico."

def fazer_diagnostico():
    nome = nome_entry.get()
    idade = idade_entry.get()
    sintomas = sintomas_entry.get().split(",")
    sexo = sexo_var.get()
    resultado_diagnostico = sistema.diagnosticar(sintomas, sexo, nome)
    resultado_label.config(text=resultado_diagnostico)

sistema = SistemaEspecialistaMedico()

janela = tk.Tk()
janela.title("Sistema de Diagnóstico Médico")

nome_label = tk.Label(janela, text="Qual é o seu nome?")
nome_label.pack()
nome_entry = tk.Entry(janela)
nome_entry.pack()

idade_label = tk.Label(janela, text="Qual é a sua idade?")
idade_label.pack()
idade_entry = tk.Entry(janela)
idade_entry.pack()

sintomas_label = tk.Label(janela, text="Quais sintomas você está enfrentando (separe por vírgulas)?")
sintomas_label.pack()
sintomas_entry = tk.Entry(janela)
sintomas_entry.pack()

sexo_var = tk.StringVar()
sexo_var.set("masculino")

sexo_label = tk.Label(janela, text="Selecione seu sexo:")
sexo_label.pack()

sexo_masculino = tk.Radiobutton(janela, text="Masculino", variable=sexo_var, value="masculino")
sexo_feminino = tk.Radiobutton(janela, text="Feminino", variable=sexo_var, value="feminino")
sexo_masculino.pack()
sexo_feminino.pack()

diagnostico_button = tk.Button(janela, text="Fazer Diagnóstico", command=fazer_diagnostico)
diagnostico_button.pack()

resultado_label = tk.Label(janela, text="")
resultado_label.pack()

janela.mainloop()
