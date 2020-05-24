const Motorcycle = require('./vehicle');

class Kymco{
    constructor(License_plate) {
        return new Motorcycle(License_plate,
            'Kymco',
            'VICTORY ONE',
            97,
            'AZUL ANTARTICA',
            'Gasolina',
            'A1',
            '9RSDR0E000',
            'KYC0008891',
            'CH0004',
            'FORZADO')
    }
}

module.exports = Kymco;