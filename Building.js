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

        const max = this.elevators.length;
        if (max === 0)
            throw "There are no elevators in the building"

        let min = Math.abs(this.elevators[0].dest_floor - floor);
        let index = 0;
        for (i = 1; i < max; ++i) {
            if (min > Math.abs(this.elevators[i].dest_floor - floor)) {
                min = this.elevators[i]
                index = i;
            }
        }

        return this.elevators[index];
    }
}