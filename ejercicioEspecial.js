/**
 * Pedir al usuario 2 números y que elija el orden de las operaciones que desea que se realicen con esos
 * números, las opciones son:
 * Suma, resta, multiplicación y división
 * 
 * Dependiendo de la elección del orden del usuario mostrar los resultados
 */

function Queue() {
    this.numbers = [];
    this.operations = [];

    this.add = function() {
        return this.numbers[0] + this.numbers[1];
    };

    this.sust = function() {
        return this.numbers[0] - this.numbers[1];
    };

    this.mult = function() {
        return this.numbers[0] * this.numbers[1];
    }

    this.div = function() {
        return this.numbers[0] / this.numbers[1];
    };

    //Como en la división no existe la conmutatividad se agregarán los números bajo el concepto de cola
    this.enqueue = function(element) {
        this.numbers.push(element);
    };

    //Push de las operaciones bajo el concepto de cola FIFO
    this.enqueueOp = function(element) {
        this.operations.push(element);
    };


}

var ordenDeUsuario = new Queue();

//Pedir datos al usuario
var num1 = prompt('Ingrese el primer número');
var num2 = prompt('Ingrese el segundo número');

//Se agregan a la cola los números sobre los cuales se realizará la operación
ordenDeUsuario.enqueue(ParseInt(num1));
ordenDeUsuario.enqueue(ParseInt(num2));
console.log(ordenDeUsuario.numbers);

//Se agregan a la cola el orden de operaciones
var contador = 0;
while (contador < 4) {
    var operaciones = prompt('Agrega el orden en que quieres sea realizada la operación.\n1: Suma; 2: Resta; 3:Multiplicación; 4:División');
    ordenDeUsuario.enqueueOp(parseInt(operaciones));
    contador++;
}

console.log(ordenDeUsuario.operations);

//Sacar de la cola uno a uno y realizar las operaciones