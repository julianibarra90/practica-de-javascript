// funcion del cuadro

    function PerimetroDelCuadro (lado) {
    return lado * 4;
} 

    function areaDelCuadrado (lado) {
    return lado * lado;
}

// funcion del triangulo

    function perimetroDelTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

    function areaDelTriangulo (base, altura){
        return (base * altura) / 2;
    }
    

    //Funcion del Circulo

const PI = Math.PI

    function diametroDelCirculo (radio) {
    return radio * 2;
    }

    function perimetroDelCirculo (radio) {
        const diametro = diametroDelCirculo(radio);
        return diametro * PI;
    }

    function areaDelCirculo (radio){
        return(radio * radio) * PI;
    }
    // Aquí interactuamos con HTML


    function calcularPerimetroCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const perimetro = PerimetroDelCuadro (value)
        alert(perimetro);
    }


    function calcularAreaCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const perimetro = areaDelCuadrado (value)
        alert(area);
    
    }




