//5. Análisis de ventas con destructuración profunda Dado este arreglo: 
// const ventas = [ { producto: "teclado", detalles: { precio: 50, unidades: 3 } }, 
// { producto: "mouse", detalles: { precio: 20, unidades: 5 } } ]; }
// Crea una función que emplee destructuración anidada para obtener precio y unidades del primer producto,
// y retorne el total vendido (precio × unidades).

const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse",   detalles: { precio: 20, unidades: 5 } }
];

function calcularTotalPrimerProducto(ventas) {
  const [{ producto, detalles: { precio, unidades } }] = ventas;

  const total = precio * unidades;
  console.log(`Producto: ${producto} | Precio: $${precio} | Unidades: ${unidades} | Total: $${total}`);
  return total;
}

calcularTotalPrimerProducto(ventas);