const Motorcycle = require('./vehicle');

class KTM {
    constructor(License_plate) {
        return new Motorcycle(License_plate,
            'KTM',
            'DUKE390',
            388.2,
            'NARANJA',
            'Gasolina',
            'A1',
            '9RWWJ6000',
            'KTM0006889',
            'CH0002',
            'LIQUIDO')
    }

}

module.exports = KTM;