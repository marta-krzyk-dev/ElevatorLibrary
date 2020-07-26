class Building {
    constructor(name, min_floor, max_floor, elevators) {
        this.name = name;
        this.min_floor = min_floor;
        this.max_floor = max_floor;
        this.elevators = elevators;
    }

    findNearestElevator(floor) {
        if (floor < this.min_floor || floor > this.max_floor)
            throw `There is no floor ${floor} in the ${this.name} building.`

        //find nearest elevator
        this.elevators.

        var fn = function asyncMultiplyBy2(e){ 
            return new Promise(resolve => Math.abs(e.current_floor - floor));
        };
        var actions = this.elevators.map(fn);
        var results = Math.min(Promise.all(actions));
    }
}