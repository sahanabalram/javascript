var oldArray = [1,2,3,4,5];

// Only change code below this line.
/*var newArray = oldArray.map(function(val){
  return val + 3;
});

var newArray = oldArray;
console.log(newArray); */

var newArray = [];
for (var i = 0; i < oldArray.length; i++){
  newArray.push(oldArray[i]+ 3);
}
console.log(newArray);
