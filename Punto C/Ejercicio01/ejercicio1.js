function procesarPedido(pedido, ...extra){
    // destructuracion del objeto 
    const { cliente, producto, cantidad } = pedido
//    retornamos el objeto con la informacion
    return {
        cliente,
        producto,
        cantidad,
        extra
    };
    
}
// le asignamos datos
const pedido = {
    cliente: "valentina",
    producto: "celular",
    cantidad: 5,
}

const resultado = procesarPedido (pedido, "cargador", "audifonos");

console.log(resultado);
