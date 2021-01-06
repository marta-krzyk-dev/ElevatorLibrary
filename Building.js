class Building {
    constructor(name, min_floor, max_floor, elevators) {
        this.name = name;
        this.min_floor = min_floor;
        this.max_floor = max_floor;
        this.elevators = elevators;

        if (elevators.length === 0)
            throw "There are no elevators set"
    }

    findNearestElevator(start_floor, dest_floor) {

        if (start_floor < this.min_floor || start_floor > this.max_floor)
            throw `There is no floor ${start_floor} in the ${this.name} building.`

        let startElevator = null;
        let endElevator = null;

        this.elevators.forEach(elevator => {
            const canStartTravel = elevator.min_floor <= start_floor;
            const canEndTravel = elevator.max_floor >= dest_floor;
            //can pick up a passanger from start elevator

            //Found an elevator that cover the whole trip
            if (canStartTravel && canEndTravel) {
                return elevator;
            }

            //Save the elevator that can start/end the trip
            //This code can only find 1 or 2 elevators to make the trip
            if (canStartTravel && startElevator === null) {
                startElevator = elevator;
            } else if (canEndTravel && endElevator === null && elevatorsCover(startElevator, elevator)) {
                endElevator = elevator;
            }
        });

        if (startElevator === null || endElevator === null) {
            throw "There are no elevators that can take passanger from floor " + 
                    start_floor + " to " + dest_floor;
        }

        return [startElevator, endElevator];
    }

    //This method checks if there are common floor between the elevators
    elevatorsCover(elevator1, elevator2) {
        if (elevator1.min_floor > elevator2.max_floor ||
            elevator2.min_floor > elecator1.max_floor) {
            return false;
        } else {
            return true;
        }
    } 
}