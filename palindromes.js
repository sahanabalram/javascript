
function palindrome(str) {
  // Good luck!
  var newStr = "";
  newStr = str.replace(/[^a-z0-9]/gmi,"").toLowerCase();
  console.log(newStr);
  if(newStr == reverseString(newStr)){
  	return true;
  } else {
  	return false;
  }
  
}

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



console.log(palindrome("2A3*3a3"));