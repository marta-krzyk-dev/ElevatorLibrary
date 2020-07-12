/*Write a script that simulates 100 passengers requesting elevators at random times, from random floors, 
and then requesting to go to random floors once they're inside the elevators. 
This script should execute over the course of 180 seconds. 
While the script is running you should keep track of how long each passenger waits from the moment they
 request the elevator to the moment they get off at their destination. Use the Math.random() function to simulate the randomness. */

 class ElevatorSimulator {
     static Simulate(time, number_of_passengers) {

        //Validate time
        if (isNaN(time) || isNaN(number_of_passengers))
            throw ("Invalid parameter(s)")

        //Create 2 elevators
        const elevator1 = new Elevator("A", -1, 9)
        const elevator2 = new Elevator("B", 0, 10)

        //asynchrounsly create x passengers with random start/dest
        //the start and dest must be diff
        //for each passenger start a timer
        //count the time for elevator job to finish
        //make sure the scenario for changing elevators (going from 10 floor to -1)
        //gather the result in arrays (passengers, times)

        
     }
 }