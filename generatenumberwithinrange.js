function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * ((myMax + 1) - myMin)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log(randomRange(7,9));