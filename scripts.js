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

// 2.3 Bloques de article o section: Cambia el color de fondo.

document.getElementsByTagName('img')[0].src = "./assets/magic-1.gif"
console.log(document.getElementsByTagName('img'))
const cambiarImagen = () =>{
    let listaImagenes = document.getElementsByTagName('img')
    for (let i= 0; i<listaImagenes.length; i++){
        let u = Math.floor(Math.random()*6+1)
        console.log(u)
        listaImagenes[i].src = `./assets/magic-${u}.gif`
        console.log(listaImagenes[i].src)
    }
}
cambiarImagen();

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

