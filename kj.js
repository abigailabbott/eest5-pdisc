const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
const elemento = document.getElementById("elemento");
boton.onclick = function() {

    const valorIngresado = document.getElementById("elemento").value;
    
    console.log(valorIngresado);
    const itemDeLista= document.createElement("li");
   
    itemDeLista.innerText = valorIngresado;
    lista.appendChild(itemDeLista);
     
}
   
  
    /*
        1 . Con el valorIngresado, crear un nuevo elemento item de lista <li>
        2 . Agregalo a la lista no ordenada que ya esta en la pagina        
    */


/*const parrafo=document.createElement("p");
const parrafo2=document.createElement("p");
console.log(parrafo);
parrafo.id="contenido";
parrafo2.innerHTML="<span>chau</span>";
console.log(parrafo2);
const cuerpo=document.querySelector("body");
cuerpo.appendChild(parrafo2);

console.info(ingredientes[0]);
console.info(ingredientes[1]);
console.info(ingredientes[2]);
console.info(ingredientes[3]);
*/

/*
    1 . Crear una lista no ordenada <ul> y almacenarla en una variable/constante
    2 . Crear un item de lista y almacenarlo en una variable/constante
    3 . Configurar el contenido del item de lista creado previamente (innerHTML / innerText)
    4 . Agregar el item de lista a la lista no ordenada
    5 . Agregar la lista no ordenada al cuerpo <body> de la pagina


const ingredientes=["ajo","perejil","2 huevos","pan rallado"];

const lista = document.createElement("ul");

for (let i = 0; i < 4; i++) {
    const itemDeLista = document.createElement("li");
    itemDeLista.innerHTML = "ingrediente "+(i + 1) + ": " + ingredientes[i];
    lista.appendChild(itemDeLista);
}

const cuerpo=document.querySelector("body");                                                                                                                                                                                                                                                      

cuerpo.appendChild(lista);
*/
