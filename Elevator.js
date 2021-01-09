class Elevator {
    constructor(name, min_floor, max_floor, current_floor=min_floor) {

        if (typeof(name) !== "string" || !name || /^\s*$/.test(name))
            throw "Invalid elevator name"

        this.name = name;
        this.current_floor = current_floor;
        this.dest_floor = current_floor;
        this.call_queue = [];

        if (isNaN(min_floor) || isNaN(max_floor) || isNaN(current_floor))
            throw "Invalid floor variable is not a number"
        else if (min_floor > max_floor)
            throw "Starting floor cannot be after the last floor"
        else if (current_floor < min_floor || current_floor > max_floor)
            throw "Invalid current floor"
        else if (max_floor - min_floor === 0)
            throw "Elevator has to move between at least 2 floors"

        this.min_floor = min_floor;
        this.max_floor = max_floor;

        this.door_is_closed = true;
        this.door_is_blocked = false;

        this.is_busy = false;

        setInterval(() => this.executeQueue());
    }

    OpenDoor() {
        if (this.door_is_blocked) {
            console.log(`Elevator ${this.name} - door is locked until reset on floor ${this.current_floor}`);
        }
        else {
            this.door_is_closed = false;
            console.log(`Elevator ${this.name} opens door on floor ${this.current_floor}`);
        }
    }

    CloseDoor() {
        if (this.door_is_blocked) {
            console.log(`Elevator ${this.name} - door is locked until reset on floor ${this.current_floor}`);
        }
        else {
            this.door_is_closed = true;
            console.log(`Elevator ${this.name} closes door on floor ${this.current_floor}`);
        }
    }

    Emergency() {        
        
        console.log(`Elevator ${this.name} - emergency button was pushed`)
        clearInterval(this.interval);
        this.OpenDoors();

       //----weystarczy to?
        this.emergency = true;

        //go to the nearest floor
      /*  if (this.current_floor == this.min_floor)
            this.Move(this.current_floor + 1); //Go up
        else
            this.Move(this.current_floor - 1); //Go down
*/
      
        this.door_is_blocked = true;
    }

    Reset() {
        console.log(`Elevator ${this.name} - resetting`)
        this.door_is_blocked = false;
        this.CloseDoors();
    }

    RequestTravel(start_floor, destination_floor) {
       
       // console.log(`Request ${this.name} to travel from ${start_floor} to ${destination_floor}`)
    
        this.call_queue.push(start_floor);
        this.call_queue.push(destination_floor);
            
    }

    // Returns number of floors (seconds) to move
    Move(start_floor, destination_floor) {

        console.log(`Elevator ${this.name} attempts to move from ${this.current_floor} to ${destination_floor}`)

        if (this.is_busy) {
            this.call_queue.push(start_floor);
            this.call_queue.push(destination_floor);
        } else {
            this.executeQueue();
        }
    }

    Move2(destination_floor) {
        console.log(`Elevator ${this.name} attempts to move from ${this.current_floor} to ${destination_floor}`)

        if (isNaN(destination_floor))
            throw ("Parameter destination_floor is not a number")

        if (destination_floor > this.max_floor || destination_floor < this.min_floor)
            throw "Floor outside of reach";

        this.busy = true;
        this.dest_floor = destination_floor;
        const travelTime = Math.abs(destination_floor - this.current_floor);
       // setTimeout(function(){ this.is_busy = false; }, travelTime * 1000);

        return travelTime;
    }

    
    MoveTo(next_floor) {
        if (next_floor < this.min_floor || next_floor > this.max_floor) {
            throw "ILLEGAL FLOOR NUMBER " + next_floor;
        } else {
            this.current_floor = next_floor;
        }
    }

    executeQueue() {
        while (this.call_queue.length > 0) {
            
            this.is_busy = true; //In production code, this variable needs to be thread-safe
         
            const destination_floor = this.call_queue.pop();
            const time = Math.abs(destination_floor - this.current_floor);
            let direction = destination_floor > this.current_floor ? 1 : -1;

            console.log("time: " + time +" direc: " + direction);

            setTimeout(() => { this.is_busy = false; console.log("busy - false"); }, 1000 * time);
            
           // for (let i = 0; i < time; ++i) {
               // console.log(`i = ${i}   ; time == ${time}`)
                this.interval = setTimeout(() => {
                    console.log(`Interval. Elevator ${this.name} goes from ${this.current_floor} to ${this.current_floor + direction}`);
                    
                    this.MoveTo(this.current_floor += direction);
                    //if (this.current_floor == destination_floor || i == time) {
                            //clearInterval(this.interval);
                    // }
                }, time * 1000);  
               // clearInterval(this.interval);
            //} 
        
        //clearInterval(this.interval);
        this.is_busy = false;
        } 
    }
}

module.exports = Elevator;