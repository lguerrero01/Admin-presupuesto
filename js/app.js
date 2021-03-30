//variables y selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

//listeners

evenListeners();

function evenListeners () {
    document.addEventListener('DOMcontentLoaded', preguntarPresupuesto);
}

//clases

//funciones

function preguntarPresupuesto () {
    const presupuestoUsuario = prompt('Cual es tu presupuesto');
    
    if( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    // console.log(presupuesto);

    // Agregarlo en el HTML
    ui.insertarPresupuesto(presupuesto)
}