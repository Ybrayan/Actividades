//AbstractFactory
// yhors brayan y mauricio

const assembleMotorcycle = require('./assembleMotorcycle');

const A = assembleMotorcycle.create('Bajaj', 'QWE987');
const B = assembleMotorcycle.create('Kawasaki', 'ABC123');
const C = assembleMotorcycle.create('KTM', 'XCV634');
const D = assembleMotorcycle.create('Kymco', 'POP234');


A.displayTsesting();
B.displayTsesting();
C.displayTsesting();
D.displayTsesting();


