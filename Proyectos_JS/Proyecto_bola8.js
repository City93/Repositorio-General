let userName = 'Christian';
userName ? console.log(`Hola ${userName}!`) : console.log('Hola!');
let userQuestion = '¿Voy a ser rico?';
console.log(`Hola ${userName}, me has preguntado esto :  ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Es seguro';
    break;
  case 1:
    eightBall = 'La posibilidad está en tu favor';
    break;
  case 2:
    eightBall = 'Pregunta de nuevo';
    break;
  case 3:
    eightBall = 'No sabría decirte ahora';
    break;
  case 4:
    eightBall = 'No cuentes con ello';
    break;
  case 5:
    eightBall = 'Las visiones no pintan bien';
    break;
  case 6:
    eightBall = 'Todo apunta a que si';
    break;
  case 7:
    eightBall = 'Olvidate';
    break;
};
console.log(eightBall)

