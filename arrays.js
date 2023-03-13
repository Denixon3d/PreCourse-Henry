// Lista de compras

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras

let elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght

let nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// PUSH y UNSHIFT

let colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT

colores.shift();
colores.pop();

console.log(colores);

// INCLUDES

let pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
let existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY

let numeros = [ 1, 6, 8, 9, 43 ];
let cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT

let palabra = 'Henri';
let palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN

let palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH

let numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP

let numeros = [ 1, 2, 3, 4 ];
let masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// FOR

var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE

var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);