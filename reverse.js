function reverseString(str) {
	var array = [];
  array = str.split("");
  console.log(array);
  
  var myArray = array.reverse();
  console.log(myArray);

  str = myArray.join("");
  console.log(str);
  return str;
}

reverseString("hello");
