// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Sacar el primer elemento 
    const nombreCliente = pedido.shift(); 
    
    pedido.unshift("bebida"); // Agrega bebida al inicio
    
    // Añadir el nombre del cliente al final 
    pedido.push(nombreCliente);
    
    // Array modificado
    return pedido; 
}

const pedidoEjemplo = ["Juan", "pizza", "ensalada"]; 
const pedidoProcesado = procesarPedido(pedidoEjemplo); 
console.log(pedidoProcesado); 

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.

function sumarPares(numeros) {
    let suma = 0; 

    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i] % 2 === 0) {
            suma += numeros[i]; 
        }
    }
    
    return suma;
}


const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumarPares(arrayNumeros);
console.log(resultado); // Imprime 30 (2 + 4 + 6 + 8 + 10)


// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    
    for (let i = 0; i < palabras.length; i++) {
        
        if (!palabras[i].endsWith('a')) {
            return false; 
        }
    }
    
    return true; 
}

const listaPalabras1 = ["casa", "silla", "mesa"];
const listaPalabras2 = ["casa", "silla", "libro"];

console.log(palabrasTerminanConA(listaPalabras1)); 
console.log(palabrasTerminanConA(listaPalabras2)); 


// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    
    // Verificamos si la palabra fue encontrada
    if (index === -1) {
        return [];
    }
    
    // Devolvemos todas las palabras después de que el índice fue encontrado
    return words.slice(index + 1); 
}

const listaPalabras = ["manzana", "banana", "cereza", "uva"];
const resultado1 = buscaPalabras(listaPalabras, "banana");
const resultado2 = buscaPalabras(listaPalabras, "cereza");
const resultado3 = buscaPalabras(listaPalabras, "kiwi"); // Kiwi no esta en la lista

console.log(resultado1); 
console.log(resultado2); 
console.log(resultado3); 


// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].

function findJavaScript(matrix) {
    // Recorrer cada fila de la matriz
    for (let i = 0; i < matrix.length; i++) {
        // Recorrer cada columna de la fila actual
        for (let j = 0; j < matrix[i].length; j++) {
            // Verificar si el elemento actual es "JavaScript"
            if (matrix[i][j] === "JavaScript") {
                return [i, j]; // Retornar la posición [fila, columna]
            }
        }
    }
    
    return [-1, -1]; // Si no se encuentra "JavaScript", retornar [-1, -1]
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]


// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.

function findMinMaxPages(books) {
    // Inicializar las variables para almacenar los índices
    let minIndex = 0; // Suponemos que el primer libro tiene el mínimo
    let maxIndex = 0; // Suponemos que el primer libro tiene el máximo

    // Recorrer el array de libros
    for (let i = 1; i < books.length; i++) {
        // Comparar con el libro actual
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualizar el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualizar el índice del libro con más páginas
        }
    }

    return [minIndex, maxIndex]; 
}

// Ejemplo 
const libros = [350, 120, 540, 275, 390, 130, 670];
const res = findMinMaxPages(libros);
console.log(res); 


// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
