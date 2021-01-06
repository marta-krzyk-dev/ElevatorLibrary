/*Write a script that simulates 100 passengers requesting elevators at random times, from random floors, 
and then requesting to go to random floors once they're inside the elevators. 
This script should execute over the course of 180 seconds. 
While the script is running you should keep track of how long each passenger waits from the moment they
 request the elevator to the moment they get off at their destination. 
 Use the Math.random() function to simulate the randomness. */

/*The goal of your code is to design a system that will get passengers from their starting floor,
  to their destination floor as quickly as possible. The timer on each passenger starts the moment they
  request the elevator. There are an unknown number of passengers in the building, on unknown floors,
  and they will be requesting to go in random directions (up or down) to random floors, 
  at random times. */

 class ElevatorSimulator {

     static Simulate(time, number_of_passengers) {

        //Validate time
        if (isNaN(time) || isNaN(number_of_passengers))
            throw ("Invalid parameter(s)")

        //Create 2 elevators
        const min_floor = -1, max_floor = 10;
        const min_floor1 = -1, max_floor1 = 9;
        const min_floor2 = 0, max_floor2 = 10;

        const elevator1 = new Elevator("A", -1, 9)
        const elevator2 = new Elevator("B", 0, 10)
        const skyscraper = new Building("Skyscraper Nano", -1, 10, {elevator1, elevator2});

        //Create 100 passengers
        const start_floor, end_floor = getRandomIntPair(min_floor, max_floor);
        const nearestElevator = skyscraper.findNearestElevator(start_floor);
        const requestTime = Date.now();
        
        //create 1 passanger - randomly choose start floor
        travelTime = nearestElevator.Move(end_floor);
        //When nearest Elevator is done, call it to the floor
        // Embark
        // Travel to destination
        
        //asynchrounsly create x passengers with random start/dest
        //for each passenger start a timer
        //count the time for elevator job to finish
        //make sure the scenario for changing elevators (going from 10 floor to -1)
        //gather the result in arrays (passengers, times)
        const timeElapsed = Date.now() - requestTime;
        
     }
 }

 function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntPair(min, max) {
    const a = randomInt(min, max);
    const b;
    do {
        b = randomInt(min, max);
    } while (a === b && min !== max)

    return a, b;
 }