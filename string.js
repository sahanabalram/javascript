function findLongestWord(str) {
	var array = str.split(" ");
	var largest = 0;
	for (var i = 0; i < array.length; i++){
		
		if (array[i].length > largest){
			largest = array[i].length;
		}
		console.log(array[i].length); 
	}
  return largest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];