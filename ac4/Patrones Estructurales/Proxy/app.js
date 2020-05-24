//proxy
//yhors brayan

var empleado = {
    nombre: '',
    apellido: '',
    password: '321sss6987'
};

function valida(prop, value) {
    const keys = Object.keys(empleado);
    const propInvalida = keys.indexOf(prop) === -1;

    if (propInvalida) {
        console.error('propiedad invalida');
        return false;
    }
    if ((prop === 'apellido' || prop === 'nombre') && /\d/.test(value)) {
        console.log(`èl valor de la propiedad ${prop} es invalido`);

        return false;
    }
    return true;
}

var handler = {
    set(obj, prop, value) {
        if (valida(prop, value)) {
            obj[prop] = value;
        }
    },
    get(obj, prop) {
        if (prop === 'password') {
            return '*'.repeat(obj[prop].length)
        }
        return obj[prop];
    }
};

const pempleado = new Proxy(empleado, handler);

pempleado.nombre = 'alejandro';
pempleado.apellido = 'magnus';
pempleado.id = 33524;
console.log(pempleado);
