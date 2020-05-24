//Singleton
// yhors brayan


class office {
    constructor(name, emplayees) {
        this.name = name;
        this.emplayees = emplayees;

        if (typeof office.instance === "object") {
            return office.instance;
        }
        office.instance = this;
        return this;
    }
}

const off1 = new office("principal", 30);
console.log(off1);
const off2 = new office("diagonal", 44);
console.log(off2);
