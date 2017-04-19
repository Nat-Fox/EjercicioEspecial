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
        this.numbers.push(parseInt(element));
    };

    //Push de las operaciones bajo el concepto de cola FIFO
    this.enqueueOp = function(element) {
        this.operations.push(element);
    };

    this.dequeue = function() {
        return this.operations.shift();
    };
}

var ordenDeUsuario = new Queue();

//Pedir datos al usuario
var num1 = prompt('Ingrese el primer número');
var num2 = prompt('Ingrese el segundo número');

//Se agregan a la cola los números sobre los cuales se realizará la operación
ordenDeUsuario.enqueue(num1);
ordenDeUsuario.enqueue(num2);
//console.log(ordenDeUsuario.numbers);

//Se agregan a la cola el orden de operaciones
var contador = 0;
while (contador < 4) {
    var operaciones = prompt('Agrega el orden en que quieres sea realizada la operación.\n1: Suma; 2: Resta; 3:Multiplicación; 4:División');
    //obligamos al usuario a ingresar una opción válida
    if (operaciones != 1 && operaciones != 2 && operaciones != 3 && operaciones != 4) {
        alert('Debes ingresar una opción válida');
    } else {
        ordenDeUsuario.enqueueOp(parseInt(operaciones));
        contador++;
    }
}

//console.log(ordenDeUsuario.operations);

//El for recibe el orden de las operaciones
var largo = ordenDeUsuario.operations.length
for (var i = 0; i < largo; i++) {
    //console.log(ordenDeUsuario.operations[i]);

    //Quito el primer elemento de la cola
    var operacion = ordenDeUsuario.dequeue();
    if (operacion === 1) {
        document.write('Suma : ', ordenDeUsuario.add() + '<br>');
        console.log('Suma :', ordenDeUsuario.add());
    } else if (operacion === 2) {
        document.write('Resta: ', ordenDeUsuario.sust() + '<br>');
        console.log('Resta: ', ordenDeUsuario.sust());
    } else if (operacion === 3) {
        document.write('Multiplicación: ', ordenDeUsuario.mult() + '<br>');
        console.log('Multiplicación: ', ordenDeUsuario.mult());
    } else if (operacion === 4) {
        document.write('División: ', ordenDeUsuario.div() + '<br>');
        console.log('División: ', ordenDeUsuario.div());
    }

}