/**
 * Crear un arreglo vacío de 5 elementos llamado nombres
 * Crear una cola llamada nombre y otro apellido
 * Recorrer por medio del principio FIFO las colas para llenar el arreglo nombres con los datos concatenados
 */

function Queue() {

    this.elementos = [];
    this.add = add;
    this.size = size;

    function add(elemento) {
        this.elementos.push(elemento);
    }

    function size() {
        return this.elementos.length;
    }
}

var nombres = [];
//Crear una cola llamada nombre y otro apellido
var nombre = new Queue();
var apellido = new Queue();

//agregar nombres y apellidos
nombre.add('Nat');
apellido.add('Garrido');
nombre.add('Anastasia');
apellido.add('Sama');
nombre.add('Smaug');
apellido.add('San');
nombre.add('Sauron');
apellido.add('Chin');
nombre.add('Bicho');
apellido.add('Bahamondez');

for (var i = 0; i < 5; i++) {
    nombres.push(nombre.elementos[i] + ' ' + apellido.elementos[i]);
}

console.log('Con FIFO ', nombres);