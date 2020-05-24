const Bajaj = require('./Bajaj');
const KTM = require('./KTM');
const Kawasaki = require('./Kawasaki');
const Kymco = require('./Kymco');

class AssembleMotorcycle {
    create(type, License_plate) {
        switch (type) {
            case 'Bajaj':
                return new Bajaj(License_plate);
                break;
            case 'Kawasaki':
                return new Kawasaki(License_plate);
                break;
            case 'KTM':
                return new KTM(License_plate);
                break;
            case 'Kymco':
                return new Kymco(License_plate);
                break;

            default:
                console.log('Motorcycle NOT FOUND');
                break;
        }
    }
}

module.exports = new AssembleMotorcycle;