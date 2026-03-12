function actualizarPerfil (perfil, ...nuevosDatos){


    const resultado  = {...perfil, ...nuevosDatos};
    return resultado;
}

const perfil ={
    nombre: "jose",
    telefono:"123456"
};
const perfilactualizado = actualizarPerfil(

    perfil,
    { edad: 20},
    { ciudad: "bucaramanga"}
);



console.log(perfilactualizado);


