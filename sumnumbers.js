//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.
//An array of two numbers has been provided.The sum of the two provided numbers and all the numbers inbetween the numbers 
//provided should be returned. It is not necessary that the lowest number will always come first.
// Example: sumAll([1,4]) => 1+2+3+4 =10

function sumAll(arr) {
    var maximum = Math.max(arr[0], arr[1]); //variable to store the maximum number in the range
    var minimum = Math.min(arr[0], arr[1]); //variable to store the minimum number in the range
    var number = 0; //variable for adding the numbers in the range

    //for loop
    for (var i = minimum; i <= maximum; i++) {
        number += i;

    }
    return (number);
}

console.log((sumAll([1, 4])));
console.log((sumAll([10, 5])));
console.log((sumAll([5, 10])));
console.log((sumAll([4, 1])));