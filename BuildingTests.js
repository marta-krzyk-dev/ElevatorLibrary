const Elevator = require("./Elevator");
const Building = require("./Building");

    function findNearestElevator_Test() {
        elevatorA = new Elevator("A", -1, 9);
        const building = new Building("building", 0, 10, [elevatorA]);

        const result = building.findNearestElevator(9, 10);
        console.log("SHOULD BE NULL OR ERROR => " + result);
    }

    function testElevatorCoverSuccess() {
        elevatorA = new Elevator("A", -1, 9);
        elevatorB = new Elevator("B", 1, 10);
        const result = Building.elevatorsCover(elevatorA, elevatorB);

        console.log("SHOULD BE TRUE ===> " + result);
    }

    function testElevatorCoverFail() {
        elevatorA = new Elevator("A", 5, 10);
        elevatorB = new Elevator("B", 1, 4);
        const result = Building.elevatorsCover(elevatorA, elevatorB);

        console.log("SHOULD BE FALSE ===> " + result);
    }


findNearestElevator_Test();
testElevatorCoverSuccess();
testElevatorCoverFail();