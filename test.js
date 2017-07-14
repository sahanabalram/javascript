function test(str){
	var str = "Styuiop";
	var arr = str.split("");
	for(var i = 0; i < arr.length; i++){
		for(var j = i+1 ; j < arr.length-1; j++){
			if(arr[i] == arr[j]){
				return true;
			} else {

			}
			
			}
		}
		return false;
	}
	


console.log(test());


