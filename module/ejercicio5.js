//   Dispones de estas configuraciones:
// const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
// const extraConfig = { nivel: 2, tema: "oscuro" };
// Crea la función configFinal(...configs) que:
// 1. Reciba múltiples configuraciones usando rest.
// 2. Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
// 3. Valide con try...catch que cada elemento recibido sea un objeto.
// 4. Retorne un objeto final con una propiedad adicional:
// o validacion: true si todo salió bien
// o validacion: false si ocurrió un error

export default function ejercicio5() {

  //usamos rest para recibir ambos objectos
  function configFinal(...configs){

    //Iniciamos el try catch..
    try{
      
      //Creamo un objecto que guarda la variable final
      let objectoFinal = {}

      //Recorremos el objecto unificado
      for (let config  of configs){

        //Vamos revisando que cada dato sea un objecto
        if (typeof(config) !== "object" || config === null){
          
          //En caso de que haya un dato que no sea objecto
          throw new Error("Se dectecto uno o varios elementos no validos")
        }

        //Una vez verificado se añade al objecto objectoFinal
        objectoFinal = {...objectoFinal, ...config}
      }

      //Retorna el valor
      return {...objectoFinal, Validacion: true}; 

    }

    //En caso de error
    catch(error){

        return {Validacion: false}

    }
  }


  const baseConfig = {modo:"" , lenguje: "es", nivel: 1}

  const extraConfig = {nivel: 2, tema :"oscuro"}

  const configfinal = configFinal(baseConfig, extraConfig)

  console.log(configfinal);
}
