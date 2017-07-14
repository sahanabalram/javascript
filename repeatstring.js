function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatedString = "";
  while(num > 0){
    repeatedString += str;
    num --;
    
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);