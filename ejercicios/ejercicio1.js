/**
 * Crear un arreglo vacio de 5 elementos llamado nombres
 * Crear dos arreglos que se comporten como pilas, uno llamado nombre y otro apellido
 * Recorrer por medio del principio LIFO las pilas para llenar el arreglo nombres con los datos concatenados
 */

function Stack() {
    this.elementos = [];
    this.add = add;
    this.size = size;

    function add(elemento) {
        //unshift agrega al principio de la pila
        this.elementos.unshift(elemento);
    }

    function size() {
        return this.elementos.length;
    }

}

//al crear un arreglo vacio pero con 5 elementos quedan 5 undefined
var nombres = [];
var nombre = new Stack();
var apellido = new Stack();
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

console.log('Con LIFO: ', nombres);