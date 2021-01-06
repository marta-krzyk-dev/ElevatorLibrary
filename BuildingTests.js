class BuildingTests {
    before() {

    }

    FindNearestElevator_Test() {
        //const building = new Building(0,10,{});

    }

    testElevatorCoverSuccess() {
        elevatorA = new Elevator("A", -1, 9);
        elevatorB = new Elevator("B", 1, 10);
        const result = Building.elevatorsCover(elevatorA, elevatorB);

        console.log("SHOULD BE TRUE ===> " + result);
    }

    testElevatorCoverFail() {
        elevatorA = new Elevator("A", 5, 10);
        elevatorB = new Elevator("B", 1, 4);
        const result = Building.elevatorsCover(elevatorA, elevatorB);

        console.log("SHOULD BE FALSE ===> " + result);
    }
}