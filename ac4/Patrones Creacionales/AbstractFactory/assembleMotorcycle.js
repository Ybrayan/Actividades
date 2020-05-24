const Bajaj = require('./Bajaj');
const KTM = require('./KTM');
const Kawasaki = require('./Kawasaki');
const Kymco = require('./Kymco');

var valorInventario = 0;
var cantidad = 3;

class AssembleMotorcycle {

    create(type, License_plate) {
        switch (type) {
            case 'Bajaj':
                if (type = 'Bajaj') {
                    var bajaj = new Bajaj(License_plate);
                    valorInventario = cantidad * bajaj.testing.cost;
                    console.log("El valor del Inventario de " + type + " es de $" + valorInventario);
                    console.dir(bajaj.testing);
                }
                return bajaj;
                break;
            case 'Kawasaki':
                if (type = 'Kawasaki') {
                    var kawasaki = new Kawasaki(License_plate);
                    valorInventario = cantidad * kawasaki.testing.cost;
                    console.log("El valor del Inventario de " + type + " es de $" + valorInventario);
                    console.dir(kawasaki.testing);
                }
                return kawasaki;
                break;
            case 'KTM':
                if (type = 'KTM') {
                    var ktm = new KTM(License_plate);
                    valorInventario = cantidad * ktm.testing.cost;
                    console.log("El valor del Inventario de " + type + " es de $" + valorInventario);
                    console.dir(ktm.testing);
                }
                return ktm;
                break;
            case 'Kymco':
                if (type = 'Kymco') {
                    var kymco = new Kymco(License_plate);
                    valorInventario = cantidad * kymco.testing.cost;
                    console.log("El valor del Inventario de " + type + " es de $" + valorInventario);
                    console.dir(kymco.testing);
                }
                return kymco;
                break;

            default:
                console.log('Motorcycle NOT FOUND');
                break;
        }
    }
}

module.exports = new AssembleMotorcycle;