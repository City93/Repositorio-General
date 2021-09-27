//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const ponerDefault=(event)=>{
    event.preventDefault();
   
}

const defaultWeb = () =>{
    let listaLinks = document.getElementsByTagName("a")
    for (let i= 0; i<listaLinks.length; i++){
        listaLinks[i].addEventListener("click", ponerDefault)
    }
}
defaultWeb();

//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.



const cambiarImagen = () =>{
    let listadoImagenes = document.getElementsByTagName('img')
    for (let i = 0; i<listadoImagenes.length;i++){
        listadoImagenes[i].addEventListener('click', () => {
            let u = Math.floor(Math.random()*6+1)
            listadoImagenes[i].src = `./assets/magic-${u}.gif`;})
    }
}
cambiarImagen()
// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const cambiarParrafo = () =>{
    let listadoParrafos = document.getElementsByTagName('p')
    for (let i = 0; i<listadoParrafos.length;i++){
        listadoParrafos[i].addEventListener('click', () => {

            listadoParrafos[i].style.color = "red" ;})
    }
}
cambiarParrafo();

// 2.3 Bloques de article o section: Cambia el color de fondo.

const cambiarBackground = () =>{
    let listadoArticle = document.getElementsByTagName('section')
    
    for (let i = 0; i<listadoArticle.length;i++){
        listadoArticle[i].addEventListener('click', () => {listadoArticle[i].style.backgroundColor = "blue" ;})
    }
}
cambiarBackground();

//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

const cambiarImagen2 = () =>{
    let listadoImagenes = document.getElementsByTagName('img')
    for (let i = 0; i<listadoImagenes.length;i++){
        listadoImagenes[i].addEventListener('mouseover', () => {
            listadoImagenes[i].src = './assets/abracadabra.gif';})
    }
}
cambiarImagen2()

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const cambiarParrafo2 = () =>{
    let listadoParrafos = document.getElementsByTagName('p')
    for (let i = 0; i<listadoParrafos.length;i++){
        listadoParrafos[i].addEventListener('mouseover', () => {

            listadoParrafos[i].style.color = "blue" ;
            listadoParrafos[i].style.backgroundColor = 'green'})
    }
}
cambiarParrafo2();

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

const cambiarBackground2 = () =>{
    let listadoArticle = document.getElementsByTagName('section')
    
    for (let i = 0; i<listadoArticle.length;i++){
        listadoArticle[i].addEventListener('mouseover', () => {listadoArticle[i].style.backgroundColor = "orange" ;})
    }
}
cambiarBackground2();

// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
  return array[Math.floor(Math.random() * 3)]
    
}

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'