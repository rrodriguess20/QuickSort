//Questão proposta: Use o algoritmo QuickSort para ordenar esta lista pela ordem do emprego

empregos = {

	Cientista: { ordem: 1, descricao: "Cientista" },
	Entregador: { ordem: 2, descricao: "Entregador da Nave Planet Express" },
	Capitao: { ordem: 3, descricao: "Capitã da Nave Planet Express" },
	Dobrador: { ordem: 4, descricao: "Dobrador na Planet Express" },
	Contador: { ordem: 5, descricao: "Contador na Planet Express" },
	Estagiario: { ordem: 6, descricao: "Estagiário na Planet Express" },
	NaoInformado: {ordem: 7, descricao: "Não Informado"},
};

funcionarios = [
	{id: 5, nome: "Bender", funcao: empregos.Dobrador},
	{id: 7, nome: "Kif Kroker", funcao: empregos.NaoInformado},
	{id: 4, nome: "Amy Wong", funcao: empregos.Estagiario},
	{id: 2, nome: "Hermes Conrad", funcao: empregos.Contador},
	{id: 1, nome: "Hubert J. Farnsworth", funcao: empregos.Cientista},
	{id: 3, nome: "Philip J. Fry", funcao: empregos.Entregador},
	{id: 8, nome: "Zapp Brannigan", funcao: empregos.NaoInformado},
	{id: 6, nome: "Turanga Leela", funcao: empregos.Capitao},
];