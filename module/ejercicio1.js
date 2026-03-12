
export default function ejercicio1() {
  const nombre = prompt("Ingresa el nombre del estudiante:");
  const notas = [
    parseFloat(prompt("Ingresa la primera nota:")),
    parseFloat(prompt("Ingresa la segunda nota:")),
    parseFloat(prompt("Ingresa la tercera nota:"))
  ];

  const estudiante = crearEstudiante(nombre, ...notas);

  if (estudiante) {
    console.log("Estudiante creado:", estudiante);
  } else {
    console.log("Error al crear estudiante. Verifica las notas.");
  }
}

// Función auxiliar:
// Valida que las notas sean números calcula el promedio del resto
// y retorna un objeto inmutable con los datos del estudiante.
export function crearEstudiante(nombre, ...notas) {
  try {
    // Validar que todas las notas sean números
    if (notas.some(n => typeof n !== "number" || isNaN(n))) {
      throw new Error("Todas las notas deben ser números");
    }

    // Separar primera nota y calcular promedio del resto
    const [primeraNota, ...restoNotas] = notas;
    const promedioResto = restoNotas.length
      ? restoNotas.reduce((a, b) => a + b, 0) / restoNotas.length
      : 0;

    // Retornar objeto inmutable con los datos
    return Object.freeze({//se utiliza para congelar un objeto, haciéndolo inmutable. Impide agregar, eliminar o modificar las propiedades existentes
      nombre,
      primeraNota,
      promedioResto,
      totalNotas: notas.length
    });

  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// Ejemplos de uso directo de la función crearEstudiante
console.log(crearEstudiante("Jose", 4.5, 3.8, 4.2)); // válido
console.log(crearEstudiante("Ana", 4.0, "texto", 3.5)); // error


