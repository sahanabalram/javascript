
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  console.log
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j< arr[i].length; j++){
          console.log("arr" + "[" + i + "][" + j + "] = " + arr[i][j]);
          product = product * arr[i][j];
          //console.log(product);
    }
  }
  // Only change code above this line
  console.log(product);
  return product;
}

// Modify values below to test your code
multiplyAll([[1],[2],[3]]);
multiplyAll([[1,2],[3,4],[5,6,7]]);
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]);
