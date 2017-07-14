function test(value){
if (arr[i]){
	return true;
} else {
	 return false;
}

}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArray = arr.filter(test);
  for(var i = 0; i < arr.length; i++){
    if(arr[i])
      newArray.push(arr[i]);
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));

 arr[i]  i = 0 = 7 - true will be pushed to newArray
 arr[i]  i = 1 = "ate" - true will not be pushed to newArray
 arr[i]  i = 2 = "" - false will not be pushed to newArray
 arr[i]  i = 3 = false - false will not be pushed to newArray
 arr[i]  i = 4 = 9 - true will be pushed to newArray
