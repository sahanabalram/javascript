function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    //Object.keys() function returns all keys in the object
    //source is the object which has only one object called last
    var keys = Object.keys(source);
    console.log(source, keys);

    for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            //to check if j property is there 
            if (collection[i].hasOwnProperty(keys[j]) === false) {
                break;
            } else {
                //property is same in collection and source
                if (collection[i][keys[j]] !== source[keys[j]]) {
                    break;
                } else {
                    //all the properties in the source are in the collection are equal
                    if (j == keys.length - 1) {
                        arr.push(collection[i]);
                    }
                }
            }
        }

    }
    // Only change code above this line
    return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// collection first argument([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
// source second argument { last: "Capulet" })
//iterate over the list and compare every element in the list with the source. if the element is present in the list then push it to the array with the help from the hints given in the reference