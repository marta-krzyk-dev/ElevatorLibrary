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

//import ElevatorSimulator from './Simulator'; 
const Simulate = require("./Simulator");

//import {Simulate} from './Simulator'; 

const numberOfPassangers = 1;
const simulationTimeInSec = 180;

//Results are 100 item:
//1. Starting floor
//2. Request Time
//3. Destination floor
//4. Waiting + travel time

let array = [1];
array.push(2);
console.log("here goes -- " + array.shift());//getting 1
array = [1, 2];
console.log("here goes -- " + array.pop());//getting 2

results = Simulate(numberOfPassangers, simulationTimeInSec);

console.log("END OF SIMULATION");
//Assert that 