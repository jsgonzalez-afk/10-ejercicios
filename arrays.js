map(): //Crea un nuevo array con los resultados.
[1, 2].map(n => n * 2); // [2, 4]

filter(): //Filtra elementos.
[1, 10, 5].filter(n => n > 5); // [10]

reduce(): //Acumula valores en uno solo.
[1, 2, 3].reduce((acc, n) => acc + n, 0); // 6

forEach(): //Ejecuta algo para cada uno (no retorna nada).
['a'].forEach(l => console.log(l)); // "a"

flatMap(): //Mapea y aplana un nivel.
[1, 2].flatMap(n => [n, n * 2]); // [1, 2, 2, 4]

flat(): //Aplana arrays anidados.
[1, [2, 3]].flat(); // [1, 2, 3]

find(): //Devuelve el objeto/valor encontrado.
[5, 12, 8].find(n => n > 10); // 12

findIndex(): //Devuelve la posición del encontrado.
[5, 12, 8].findIndex(n => n > 10); // 1

includes(): //Verifica si existe un valor exacto.
['azul', 'rojo'].includes('azul'); // true

some(): //¿Alguno cumple?
[1, 2, 3].some(n => n > 2); // true

every(): //¿Todos cumplen?
[1, 2, 3].every(n => n > 0); // true

indexOf(): //Busca el índice de un valor.
['a', 'b'].indexOf('b'); // 1

push(): //Añade al final.
let a = [1]; a.push(2); // a es [1, 2]

pop(): //Saca el último.
let a = [1, 2]; a.pop(); // a es [1]

shift(): //Saca el primero.
let a = [1, 2]; a.shift(); // a es [2]

unshift(): //Añade al inicio.
let a = [1]; a.unshift(0); // a es [0, 1]

splice(): //Quita o inserta en medio.
let a = [1, 2, 3]; a.splice(1, 1, 'x'); // a es [1, 'x', 3]

sort(): Ordena.
[3, 1, 2].sort(); // [1, 2, 3]

reverse(): //Invierte el orden.
[1, 2].reverse(); // [2, 1]

fill(): //Rellena con un valor.
[1, 2, 3].fill(0); // [0, 0, 0]

toSorted(): //Ordena sin cambiar el original.
const b = a.toSorted();

toReversed(): //Invierte sin cambiar el original.
const b = a.toReversed();

toSpliced(): //Splice que devuelve un nuevo array.
const b = a.toSpliced(0, 1);

with(): //Cambia un elemento en un índice por otro sin mutar.
[1, 2, 3].with(1, 'nuevo'); // [1, 'nuevo', 3]

join(): //Convierte a string con un separador.
['a', 'b'].join('-'); // "a-b"

slice(): //Corta una parte del array (no muta).
[1, 2, 3, 4].slice(1, 3); // [2, 3]

concat(): //Une dos arrays.
[1].concat([2]); // [1, 2]

at(): //Accede a un índice (soporta negativos).
[10, 20].at(-1); // 20