const Motorcycle = require('./vehicle');

class Bajaj {
    constructor(License_plate) {
        return new Motorcycle(License_plate,
            'Bajaj',
            'NS',
            'NS160',
            154.3,
            'ROJO',
            'Gasolina',
            'A1',
            '9R8T5EE000',
            'BJ0002356',
            'CH0001',
            'Radiador',
            125000
        )
    }

}

module.exports = Bajaj;