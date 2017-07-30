
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    'alpha':"Adams",
    'bravo': "Boston",
    'charlie': "Chicago",
    'delta': "Denver",
    'echo': "Easy",
    'foxtrot': "Frank"
};
  
  // Only change code above this line
  return result = lookup[val];
}

// Change this value to test
console.log(phoneticLookup("charlie"));
