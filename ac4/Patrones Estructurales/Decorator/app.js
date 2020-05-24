//Decorator
//yhors brayan

const Producto = require('./producto');
const ProductoInternacional = require('./productoInternacional');

let producto = new Producto();

producto = new ProductoInternacional(producto);

console.log(producto.getprice());
