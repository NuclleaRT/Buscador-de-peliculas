let menu = document.getElementById('selectLista');
let inputBusqueda = document.getElementById('inputBuscar');
let btn = document.getElementById('btnBuscar');
let txtBusqueda = document.getElementById('resultadoBusqueda');

let eleccion; 

menu.addEventListener('change', cambiarEleccion);
inputBusqueda.addEventListener('keydown',verificar);
btn.addEventListener('click', busqueda);


function cambiarEleccion(){
    let eleccion = menu.value;
    return eleccion;
}

function verificar(event){
    if((event.key < 65 || event.key > 90) && event.key != 8 && event.key != 32 ){
        event.preventDefault();
    }
}

function busqueda (){
    txtBusqueda.innerHTML = "";

    fetch (cambiarEleccion())
    .then(res => res.json())
    .then(function(respuesta){
    for(let pelicula of respuesta.data){
        if(pelicula.nombre.startsWith(inputBusqueda.value.toUpperCase())){
            let p = document.createElement('p');
            p.id = pelicula.nombre;
            p.innerHTML = pelicula.sinopsis;

            let li = document.createElement('li');
            li.innerHTML = pelicula.nombre;

           

            li.appendChild(p);
            txtBusqueda.appendChild(li);

        }
        
    }

        

        

    })
    .catch(function(error){
        alert(error)
    })

}