// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Two arrays have been given and has to be compared with all the items in the array.The item that is unique in one of the arrays should be returned. 

function diffArray(arr1, arr2) {
    var newArr = [];
    //Same, same; but different
    //Iterate through array 1 
    for (var i = 0; i < arr1.length; i++) {
        //If array 2 doesn't have the same items as array 1
        if (arr2.indexOf(arr1[i]) === -1) {
            // Push it to a new array
            newArr.push(arr1[i]);

        }
    }
    // Iterate through array 2
    for (var j = 0; j < arr2.length; j++) {
        // If array 1 doesn't have the same items as array 2
        if (arr1.indexOf(arr2[j]) === -1) {
            // Push it to new array
            newArr.push(arr2[j]);
        }
    }
    return newArr;

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));