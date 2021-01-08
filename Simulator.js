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
  const Elevator = require("./Elevator");
  const Building = require("./Building");
  const Logger = require("./Logger");

     async function Simulate(time, number_of_passengers) {

       // logger = new Logger(true);

        //Validate time
        if (isNaN(time) || isNaN(number_of_passengers))
            throw ("Invalid parameter(s)")

        //Create 2 elevators
        const min_floor = -1, max_floor = 10;
        const min_floor1 = -1, max_floor1 = 9;
        const min_floor2 = 0, max_floor2 = 10;

        const elevator1 = new Elevator("A", -1, 9)
        const elevator2 = new Elevator("B", 0, 10)
        const skyscraper = new Building("Skyscraper Nano", -1, 10, [elevator1, elevator2]);

        //Create 100 passengers
       
        const promise3 = new Promise((resolve, reject) => {

            console.log("PROMISE STARTED");
            //create passanger 
            //const passanger = createPassager();
        [start_floor, end_floor] = getRandomIntPair(min_floor, max_floor);
        console.log("FLOORS: " + start_floor + ", " + end_floor);
       // nearestElevator = skyscraper.findNearestElevator(start_floor);
        const requestTime = Date.now();
            //call elevator in building

            let elevator;
            try {
                elevator = skyscraper.findNearestElevator(start_floor, end_floor);
            } catch(e) {
                console.log(e);
                reject(e);
            }
            console.log("Here goes elevator: " + elevator.name);
            
resolve(elevator);
            if (elevator instanceof Array) {

            } else {
                
            }
            
            if (elevator === 0) {
               
            }
           // setTimeout(resolve, 100, 'foo');

                    //create 1 passanger - randomly choose start floor
            //travelTime = elevator.Move(end_floor);
          });

        //const tasks   = asyncThingsToDo.map([promise3]]); // Run all our tasks in parallel.
results = await Promise.all([promise3, promise3, promise3])
//.then(result => function () {
   // console.log("Promise Resolved");
 //   result.forEach(x => console.log(x)); 
//})
.catch(function () {
    console.log("Promise Rejected");
});     // Gather up the results.

console.log("RESULTS: "); console.log(results);
if (results !== undefined) {
//results.forEach(x => console.log(x)); 
}

        //When nearest Elevator is done, call it to the floor
        // Embark
        // Travel to destination
        
        //asynchrounsly create x passengers with random start/dest
        //for each passenger start a timer
        //count the time for elevator job to finish
        //make sure the scenario for changing elevators (going from 10 floor to -1)
        //gather the result in arrays (passengers, times)
        //const timeElapsed = Date.now() - requestTime;
        
     }


 function createPassager() {

 }

 function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntPair(min, max) {
    const a = randomInt(min, max);
    let b;
    do {
        b = randomInt(min, max);
    } while (a === b && min !== max)

    return [a, b];
 }

 module.exports = Simulate;