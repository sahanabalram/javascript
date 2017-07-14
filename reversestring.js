function reverseString(str){
	var array = [];
	 
	array = str.split("");
	var myArray = array.reverse();
	for(var i = 0; i < array.length; i++){
		array = myArray.join("");
	}
}
reverseString("Games")