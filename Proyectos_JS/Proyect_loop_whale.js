const input = 'Estamos de fiesta con la pandilla y los merluzos';
const vowels = ['A','E','I','O','U','a','e','i','o','u'];
let resultArray = [];

for (let i = 0 ; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
 
  {   if (input[i] === 'e'){
       resultArray.push('ee');
      }
      else if(input[i] === 'E'){
       resultArray.push('EE');
      }
      else if(input[i] === 'u'){
       resultArray.push('uu');
      }
      else if(input[i] === 'U'){
       resultArray.push('UU');
      } else {
        resultArray.push(input[i])
      }
  }
}}};
console.log(resultArray.join('').toUpperCase())