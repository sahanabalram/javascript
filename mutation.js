function mutation(arr) {
  var myArr = arr[1].toLowerCase();
  var myArr1 = arr[0].toLowerCase();
  for (i=0;i<myArr.length;i++) {
    if (myArr1.indexOf(myArr[i]) < 0)
      return false;
  }
  return true;
 }

console.log(mutation(["hello", "hey"]));

example : "hello" , "hey"
h - 0
e - 1
l - 2
l - 3
o - 4

h - 0
e - 1
y - 2


i = 0

myArr1.index(myArr[0]) = "hello".index("hey"[0]) =  "hello".index('h')

0 < 0 : false -> continue loop

myArr1.index(myArr[1]) = "hello".index("hey"[1]) =  "hello".index('e')

1 < 1 : false -> continue loop

myArr1.index(myArr[2]) = "hello".index("hey"[2]) =  "hello".index('y')

-1 < 1 : true -> return false 

