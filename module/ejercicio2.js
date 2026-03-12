// 2. Fusión de catálogos digitales
// Requerimiento:
// Tienes dos catálogos:
// const catalogoA = [
// { id: 1, nombre: "Curso JavaScript", precio: 40 },
// { id: 2, nombre: "Curso HTML", precio: 35 }
// ];
// const catalogoB = [
// { id: 3, nombre: "Curso CSS", precio: 30 }
// ];

// Crea una función fusionarCatalogos(a, b) que:


// 1. Use try...catch para validar que ambos parámetros sean arreglos.
// 2. Utilice spread para fusionarlos sin modificar los originales.
// 3. Retorne un nuevo catálogo ordenado por precio ascendente.
// Resultado esperado:
// Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo,
// debe mostrarse un error comprensible.

export default function ejercicio2() {
  
  const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

function fusionarCatalogos(a, b) {
  try {
    // Validar que ambos sean arreglos
    // Se usa el Array.isArray() para verficar que los datos sean arreglos
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos (arrays) válidos.");
    }

    //Fusionamos los arreglos sin crear una mutabilidad
    const fusion = [...a, ...b];

    // Usamos sort para organizar los elementos de manera asendente especificando que sea por precion
    fusion.sort((itemA, itemB) => itemA.precio - itemB.precio);

    return fusion;

  } catch (error) {
    console.error("Error en la fusión:", error.message);
  }
}

// Ejecución
const resultado = fusionarCatalogos(catalogoA, catalogoB);
console.log(resultado);

}
