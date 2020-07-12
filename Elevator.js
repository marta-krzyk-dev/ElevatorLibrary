class Elevator {
    constructor(name, min_floor, max_floor) {

        if (typeof(name) !== "string" || !str || /^\s*$/.test(name))
            throw "Invalid elevator name"

        this.name = name;

        if (isNaN(min_floor) || isNaN(max_floor))
            throw "Invalid floor"
        else if (min_floor > max_floor)
            throw ("Starting floor cannot be after the last floor");

        this.min_floor = min_floor;
        this.max_floor = max_floor;

        this.current_floor = this.min_floor;
    }

    OpenDoors() {
        console.log(`${this.name} closes doors`)
    }

    CloseDoors() {
        console.log(`${this.name} open doors`)
    }

    Move(destination_floor) {
        
    }
}