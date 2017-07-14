
// function rot13 will shift every element in string str by 13 and 
// will wrap around back to A when the shift sum reaches 90
function rot13(str) { // LBH QVQ VG!
  // declar an empty string to store the result
  var s = "";
  // loop (iterate) over every element in the string
  for(var i = 0; i < str.length; i++){
    // convert only for values that fall within the Ascii value of
    // A to Z (65 to 90)
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90 )
    {
      // check if Ascii value + shift of 13 reaches beyond ascii value of Z
      // Ascii value of Z = Ascii value of A + 25 = 90
      if(str.charCodeAt(i) + 13 <= 90){
        // if above statement is true, just use the shifted value in the assignment
        // s = s + "something" contenates "something with" the pre defined value of 
        // string s
        // eg: if s = "sahana" and s = s + " balram" will result in s = "sahana balram"
        s = s + String.fromCharCode(str.charCodeAt(i) +13);
      } else {
        // if the if statement is false then you need to wrap around. So you just subtract 
        // by 26 (as there are 26 alphabets in english language) to go back to ASCII value of A
        // this will first happen for 'N' which has ascii value of 78 as 78 + 13 = 91 and 91 goes
        // beyond the ascii of Z which is 90. So you wrap around this by subtracting 26 from 91 which
        // give the ascii value of A = 65 (91 - 26)
        s = s + String.fromCharCode(str.charCodeAt(i)+ 13 - 26);
      }
    } else {
      // if the ascii values of element in string falls outside the ascii of A-Z just take the number
      // as is
      s = s + String.fromCharCode(str.charCodeAt(i));
    }
  }
  // finally return the string that was used to store the result
  return s;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
