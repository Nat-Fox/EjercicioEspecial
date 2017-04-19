/**
 * Crear un arreglo vacío de 5 elementos llamado nombres
 * Crear una cola llamada nombre y otro apellido
 * Recorrer por medio del principio FIFO las colas para llenar el arreglo nombres con los datos concatenados
 */

function Stack() {
    var nombres = [];
    this.push = push;
    this.pop = pop;

    function push(element) {
        nombres.push(element);
    };

    function pop() {
        return nombres.pop();
    };

}

function Queue() {

    this.elementos = [];
    this.size = size;
    this.enqueue = enqueue;
    this.dequeue = dequeue;

    function enqueue(element) {
        this.elementos.push(element);
    };

    function size() {
        return this.elementos.length;
    };

    function dequeue() {
        return this.elementos.shift();
    };

}

var nombres = [];
//Crear una cola llamada nombre y otro apellido
var nombre = new Queue();
var apellido = new Stack();

//agregar nombres y apellidos
nombre.enqueue('Nat');
apellido.push('Garrido');
nombre.enqueue('Anastasia');
apellido.push('Sama');
nombre.enqueue('Smaug');
apellido.push('San');
nombre.enqueue('Sauron');
apellido.push('Chin');
nombre.enqueue('Bicho');
apellido.push('Bahamondez');

for (var i = 0; i < 5; i++) {
    nombres.push(nombre.dequeue() + ' ' + apellido.pop());
}

console.log('Fusionando sacar don dequeue y con pop queda: ', nombres);