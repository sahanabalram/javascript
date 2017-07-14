function addition(num){
	var number = 0;
	for(var i = 1; i <= num; i++){
		number = number + i;
	}
	return number;
} 

console.log(addition(9));