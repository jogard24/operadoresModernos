// 4. Mezcla de configuraciones con spread y destructuración
// Simula un sistema donde existen opciones por defecto y opciones personalizadas:
// const defaults = { tema: "claro", idioma: "es" };
// Crea una función configurarUsuario(defaults, personalizadas) que:
// • Use spread para combinar ambas configuraciones sin mutarlas.
// • Use destructuración para obtener el idioma configurado.
// Retorna el idioma resultante.


function configurarUsuario(defaults, personalizadas){

    //Para poder realizar la fucion de ambos objectos ambos deben tener los 3 puntos
    let configuraciones = {...defaults, ...personalizadas};

    //Realizo la destruturacion
    const {tema, idioma} = configuraciones;

    //muestor los resultados
    console.log(`---Configuraciones---\n tema: ${tema}\n idioma: ${idioma}`);
    

}


const defaults = {
    tema: "claro",
    idioma: "es"
}

const personalizadas = {

    tema: "oscuro",
    idioma: "en"
}


configurarUsuario(defaults, personalizadas)


