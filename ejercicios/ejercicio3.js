/**
 * Crear una cola que pregunte cuantos usuarios se desean ingresar, pregunte los nombres y al final muestre
 *  en que orden fueron llegando, quien es el primero y quien es el ultimo que será atendido.
 */

function Queue() {
    this.elementos = [];
    this.add = add;
    this.getFirst = getFirst;
    this.getLast = getLast;
    this.getElements = getElements;

    function add(elemento) {
        this.elementos.push(elemento);
    }

    function getFirst() {
        return this.elementos[0];
    }

    function getLast() {
        return this.elementos[this.elementos.length - 1];
    }

    function getElements() {
        return this.elementos;
    }
}

var usuarios = new Queue();
var numUsuarios = prompt('Ingrese número de usuarios a ingresar');
var numero = parseInt(numUsuarios);

for (var i = 0; i < numero; i++) {
    var usuario = prompt('¿Como se llama el usuario?');
    usuarios.add(usuario);
}
console.log('El orden de llegada de los usuarios fue ' + usuarios.getElements());
console.log('El primero en llegar fue ' + usuarios.getFirst());
console.log('El último en ser atendido sera ' + usuarios.getLast());