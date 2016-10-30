function juntaImpares(vetor1, vetor2) {
}

function juntaPares(vetor1, vetor2) {
}

function separa(vetor) {
	var vetorResultado = [];
	vetor.forEach(function (valor, indice) {
		var vetorUnitario = [];
		vetorUnitario.push(valor);
		vetorResultado.push(vetorUnitario);
	});
	return vetorResultado;
}

function ordena(numeros) {
	var separados = separa(numeros);
	console.log(separados);

	if(separados.length%2 == 0){
		juntaPares();
	} else {
		juntaImpares();
	}
}

$("#ordenar").on('click', function () {
	var numeros = $("#numeros").val();
	if(numeros.length == 0){
		alert("Informe algum numero");
	} else {
		ordena(numeros.split(","));
	}
});