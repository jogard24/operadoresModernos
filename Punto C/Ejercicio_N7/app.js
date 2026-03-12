function evaluar(...valores) {
try {
// Verificar que todos sean números
    valores.forEach(valor => {
        if (typeof valor !== "number" || isNaN(valor)) {
            throw new Error("Se encontró un valor no numérico");
        }
    });

// Crear una nueva lista (inmutable)
        const nuevaLista = [...valores];

// Calcular promedio
    const suma = nuevaLista.reduce((total, num) => total + num, 0);
    const promedio = suma / nuevaLista.length;

    return promedio;

} catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(evaluar(10, 20, 30));