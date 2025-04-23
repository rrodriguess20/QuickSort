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
function ParticionarFuncionarios(array, left, right){

	const pivo = array[Math.floor((left+right)/2)].funcao.ordem;

	let i = left;
	let j = right;

	while(i<=j){

		do{

			i++;
		}while(array[i].funcao.ordem<pivo);

		do {

			j--;
		} while (array[j].funcao.ordem > pivo);

		if(i<=j){

			[array[i], array[j]] = [array[j], array[i]]; //troca de posicao

			i++;
			j--;
		}

	}

	return i;
}


function QuickSort(array, left = 0, right = array.length - 1) {

	if (left < right) {
	  const index = ParticionarFuncionarios(array, left - 1, right + 1);
  
	  QuickSort(array, left, index - 1);
	  QuickSort(array, index, right);
	}
  
	return array;
}

function ImprimirFuncionarios(array){

	console.log(`\nLista final ordenada:\n`);

	array.forEach(f => {
		
		console.log(`${f.nome} - ${f.funcao.descricao} (ordem ${f.funcao.ordem})`);
	});
}


function main(){

	QuickSort(funcionarios);
	ImprimirFuncionarios(funcionarios);
}

main();