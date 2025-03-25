class Vehicle {
    move(): void {
        console.log("Moving on the road");
    }
}

class Car extends Vehicle {
    move(): void {
        console.log('Car is moving on the road');
    }
}

class Boat extends Vehicle{
    sail():void{
        console.log("The boat is sailing");
    }
}

class Plane extends Vehicle{
    fly(): void{
        console.log("The plane is flying");
    }
}

const boat = new Boat();

