

const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#email')
const telefono = document.querySelector('#telefono')

nombre.addEventListener('keyup', (evt) => {
    let valor = evt.target.value

   // Eliminar los numeros
    nombre.value = valor.replace(/[0-9]/g, '')
})

correo.addEventListener('keyup', (evt) => {
   let valor = evt.target.value

   correo.value = valor.trim();
})

telefono.addEventListener('keyup', (evt) => {
    let valor = evt.target.value

    telefono.value = valor
    // Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Elimina el ultimo espaciado
	.trim();
})