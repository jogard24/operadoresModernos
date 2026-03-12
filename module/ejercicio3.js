export default function ejercicio3() {
  const cliente = {
    nombre: "Carlos",
    correo: "carlos@gmail.com"
};

const productos = [
    { nombre: "Mouse", precio: 50000 },
    { nombre: "Teclado", precio: 80000 }
];

console.log(procesarCompra(cliente, productos));



function procesarCompra(cliente, productos) {
try {
    // Validar cliente
    if (!cliente || !cliente.nombre || !cliente.correo) {
        throw new Error("El cliente no tiene los datos completos");
    }

// Validar productos
    if (!Array.isArray(productos) || productos.length === 0) {
        throw new Error("La lista de productos no es válida");
}

productos.forEach(p => {
    if (!p.nombre || typeof p.precio !== "number") {
        throw new Error("Producto inválido detectado");
    }
});

    // Spread para copiar cliente (inmutabilidad)
    const clienteInfo = { ...cliente };

    // Destructuring para separar el primer producto
    const [primerProducto, ...restoProductos] = productos;

    // Calcular precio total
    const precioTotal = productos.reduce((total, p) => total + p.precio, 0);

    // Construir informe
const informe = {
    cliente: clienteInfo,
    totalProductos: productos.length,
    precioTotal: precioTotal,
    primerProductoAdquirido: primerProducto.nombre
};
return informe;

} catch (error) {
    return {
    error: true,
    mensaje: error.message
    };  
}
}


}
