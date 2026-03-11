import * as ejercicios from './index.js';



function menu() {
  let opcion;//creamos una variable para almacenar lo que el usuario esscriba
  do {//usamos un do para preguntar al usuario 
    console.log("hola :D");
    opcion = prompt(
      "Elige un ejercicio (1-5) o digita 0 para salir:\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Ejercicio 5"
    );

    const num = ["1", "2", "3", "4", "5"];

    if (num .includes(opcion)){//y un if para verificar si la opcion que elija el usuario esta dentro del arreglo
    const key = `ejercicio${opcion}`;
    ejercicios[key](); // ejecuta el módulo correspondiente

  }
}while (opcion !== "0");
}

menu();