// Pre-entrega 2
// 1. Condicional , ciclo de repeticion, funcion, arrays, objetos, y algun metodo de orden superior.

function stockDeProducto(name) {
    let producto = name.toLowerCase();
    let stock = productos.filter( el => el.nombre === producto );
    
    if(!stock.length) {
        console.log(`No se econtro ${producto}, intente nuevamente`);
    } else {
        console.table(stock); 
    }
}


let pedido = prompt('Que IPhone estas buscando?');
 
while(pedido) {
    stockDeProducto(pedido);
    pedido = prompt('Que IPhone estas buscando?');
};





