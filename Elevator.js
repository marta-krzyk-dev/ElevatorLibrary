class Elevator {
    constructor(name, min_floor, max_floor, current_floor=min_floor) {

        if (typeof(name) !== "string" || !name || /^\s*$/.test(name))
            throw "Invalid elevator name"

        this.name = name;
        this.current_floor = current_floor;
        this.dest_floor = current_floor;

        if (isNaN(min_floor) || isNaN(max_floor) || isNaN(current_floor))
            throw "Invalid floor variable is not a number"
        else if (min_floor > max_floor)
            throw "Starting floor cannot be after the last floor"
        else if (current_floor < min_floor || current_floor > max_floor)
            throw "Invalid current floor"
        else if (max_floor - min_floor === 0)
            throw "Elevator has to move between at least 2 floors"

        this.min_floor = min_floor;
        this.max_floor = max_floor;

        this.door_is_closed = true;
        this.door_is_blocked = false;

        this.is_busy = false;
    }

    OpenDoors() {
        if (this.door_is_blocked) {
            console.log(`Elevator ${this.name} - doors are locked until reset`);
        }
        else {
            this.door_is_closed = false;
            console.log(`Elevator ${this.name} closes doors`);
        }
    }

    CloseDoors() {
        if (this.door_is_blocked) {
            console.log(`Elevator ${this.name} - doors are locked until reset`);
        }
        else {
            this.door_is_closed = true;
            console.log(`Elevator ${this.name} opens doors`);
        }
    }

    Emergency() {
        console.log(`Elevator ${this.name} - emergency button was pushed`)
        //go to the nearest floor
        if (this.current_floor == this.min_floor)
            this.Move(this.current_floor + 1); //Go up
        else
            this.Move(this.current_floor - 1); //Go down

        this.OpenDoors();
        this.door_is_blocked = true;
    }

    Reset() {
        console.log(`Elevator ${this.name} - resetting`)
        this.door_is_blocked = false;
        this.CloseDoors();
    }

    // Returns number of floors (seconds) to move
    Move(destination_floor) {

        console.log(`Elevator ${this.name} attempts to move from ${this.current_floor} to ${destination_floor}`)

        if (NaN(destination_floor))
            throw ("Destinatio floor is not a number")

        if (destination_floor > this.max_floor || destination_floor < this.min_floor)
            throw "Floor outside of reach";

        this.busy = true;
        this.dest_floor = destination_floor;
        const travelTime = Math.abs(destination_floor - this.current_floor);
        setTimeout(function(){ this.is_busy = false; }, travelTime * 1000);
        return travelTime;
    }
}

module.exports = Elevator;