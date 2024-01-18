let menu = document.getElementById('selectLista');
let inputBusqueda = document.getElementById('inputBuscar');

menu.addEventListener('change', cambiarEleccion);

function cambiarEleccion(){
    let eleccion = menu.value;
    let evento = new CustomEvent('alertEleccion');
    function alertEleccion(){
        alert('Se modifico el archivo base a ' + eleccion)
        menu.dispatchEvent(evento);
    }
}
