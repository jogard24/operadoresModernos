function fusionarColecciones(lista1, lista2) {
try {
    // Validar que ambos parámetros sean arreglos
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
        throw new Error("Las dos colecciones deben ser arreglos válidos");
    }
    // Fusionar las listas sin mutarlas usando spread
    const coleccionFinal = [...lista1, ...lista2];
    // Retornar la nueva colección
    return coleccionFinal;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

const listaA = ["manzana", "pera"];
const listaB = ["banana", "mango"];
const resultado = fusionarColecciones(listaA, listaB);
console.log(resultado);