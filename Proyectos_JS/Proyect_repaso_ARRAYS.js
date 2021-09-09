let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Quitar el ultimo componente del array .pop
secretMessage.pop();

//Para conocer la cantidad de items en un array
console.log(secretMessage.length);
//Para añadir componentes al final del array
secretMessage.push('to', 'Program');

//Para cambiar items por otros en el array
secretMessage[7] = 'right';

//Quitar el primer item del array
secretMessage.shift();
//Añadiendo un item al principio del array
secretMessage.unshift('Programming');
console.log(secretMessage);
//Quitar ciertos items del array e intercambiarlo por otro item array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5,'know,');
console.log(secretMessage);
//Para print el array en una linea
console.log(secretMessage.join(' '));
