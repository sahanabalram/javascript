function largestOfFour(arr) {
  // You can do this!
  var largestNumber = [0, 0, 0, 0];
  for (var i =0; i < arr.length; i++) {
  	for(var j = 0; j < arr[i].length; j++){
  		if(arr[i] [j] > largestNumber[i]){
  			largestNumber[i] = arr[i][j];

  		};
  	}
  
  }
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));