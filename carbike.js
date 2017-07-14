var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  var gear = 2;
  // these are public methods
  
  this.setGear = function(newValue){
    gear = newValue;
     
  };
  this.getGear = function(){
    return gear;
  };
 

};



var myCar = new Car();

var myBike = new Bike();

console.log(myCar.getSpeed());
myCar.accelerate(5);
console.log(myCar.getSpeed());

myCar.decelerate();
console.log(myCar.getSpeed());

myCar.decelerate();
console.log(myCar.getSpeed());

myBike.setGear(4);
console.log(myBike.getGear());

myBike.setGear(5);
console.log(myBike.getGear());

myBike.setGear("R");
console.log(myBike.getGear());
