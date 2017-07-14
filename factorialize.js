function factorialize(num) {
	var result = 1;
	for (var i = 1; i <= num; i++){
		result = result * i;
		console.log(result);

	}
	num = result;
  return num;
}

console.log(factorialize(5));
