class productoInternacional {
    constructor(producto) {
        this.producto = producto;
    }
    getprice() {
        return this.producto.getprice() *3835;
    }
    getname() {
        return this.traslate();
    }
    traslate() {
        return this.producto.getname() + " Europa";
    }
    getdescription() {
        return this.producto.getdescription() + " Europeo";
    }
}

module.exports = productoInternacional