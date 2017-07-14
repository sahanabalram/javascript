function longWord(str) {
	var array = str.split(" ");
	var longest = 0;
	for (var i = 0; i < array.length; i++){
		
		if (array[i].length > longest){
			longest = array[i].length;
		}
		console.log(array[i].length); 
	}
  return longest;
}

console.log(longWord("James is an intelligent boy"));