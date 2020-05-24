class Motorcycle {
  constructor(
    License_plate,
    brand = 'AUTECO',
    line,
    model = 2020,
    cylinder = 150,
    Colour = 'Negro',
    fuel = 'Gasolina',
    engine_number = 'XXX',
    VIN = 'A1B2C3D4E5',
    serial_number = '99999_SSS',
    chassis_number = '99999_CSS',
    refrigeration = 'Aire',
    cost = 120000,

  ) {
    this.License_plate = License_plate;
    this.testing = {
      brand,
      line,
      model,
      cylinder,
      Colour,
      fuel,
      engine_number,
      VIN,
      serial_number,
      chassis_number,
      refrigeration,
      cost,

    }
  }
  displayTsesting() {
    console.log(this.testing);
  }
}

module.exports = Motorcycle;
