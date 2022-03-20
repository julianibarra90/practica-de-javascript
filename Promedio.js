// const lista1 = [
//     100,
//     200,
//     300,
//     400,
//     500,
// ];



function calcularMediaAritmetica (lista){
    // let sumalista =0;

    // for (let i = 0; i < lista.lenth; i ++){
    //     sumalista = sumalista + lista [i];
    // }

    const sumalista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;
    return promedioLista;
}