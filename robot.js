function robo() {
    let usedName = [];
    class Robot {
        constructor() {
            this.check();
            this.name = usedName[0];
        }
        check() {
            if (usedName.length == 0) {
                this.generateName();
            }
        }

        generateName() {
            let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let number = "0123456789";
            let name = [letter, letter, number, number, number]
                .map(this.generateRandom)
                .join("");
            usedName.push(name);
            // if (usedName.length > 1) {
            //     usedName.shift();
            // }
        }
        generateRandom(value) {
            return value[Math.floor(Math.random() * value.length)];
        }
        reset() {
            this.generateName();
        }
    }
}

let robo = new Robot();

console.log(robo.name);
console.log(robo.name);
console.log(robo.name);
console.log(robo.name);
