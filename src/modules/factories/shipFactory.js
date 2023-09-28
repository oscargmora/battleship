class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sink = false;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sink = true;
        }
    }
}

export default Ship;