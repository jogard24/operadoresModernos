// 3. Registro de actividades con manejo de errores
// Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
// {nombre, fecha}.
// • Usa un try...catch para validar que ambas propiedades existan.
// • Si falta alguna, lanza un error indicando que la actividad no es válida.
// • Si todo está correcto, muestra un mensaje confirmando el registro.

function registrarActividad(actividad){

    try{

       const {nombre, fecha} = actividad

       if (!nombre || !fecha){
            throw new Error("La actividad realiada no es valida");
        
       }
    
           console.log (`Nombre: ${nombre}, Fecha: ${fecha}`);

    }

    catch(error){
        console.error(error.message);
    }

}

let objecto = {
    nombre: "Juan",
    fecha: "23 de agosto"
}

// este objecto dispara el error creado
// let objecto = {
//     nombre: "juan"
// }

registrarActividad(objecto)