const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;

    }
); 

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista;
return promedioLista;
}



function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(personita.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = (medianaSalarios(salariosColSorted));

console.log ({medianaGeneralCol, mediaTop10Col,});
