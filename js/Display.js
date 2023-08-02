class Display{
    constructor(displayVSumado, displayVActual){
        this.displayVActual = displayVActual;
        this.displayVSumado = displayVSumado;
        this.calculadora = new Calculadora ();
        this.displayVActual = "";
        this.displayVSumado = "";
    }

    agregarNumero(numero){
        this.displayVActual = numero;
    }
}