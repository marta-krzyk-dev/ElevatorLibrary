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

const numberOfPassangers = 100;
const simulationTimeInSec = 180;

//Results are 100 item:
//1. Starting floor
//2. Request Time
//3. Destination floor
//4. Waiting + travel time

results = ElevatorSimulator.Simulate(numberOfPassangers, simulationTimeInSec);

//Assert that 