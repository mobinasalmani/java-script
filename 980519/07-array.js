let myArray=[12,18,5,0,16];
myArray.shift();
console.log(myArray.length);
myArray.shift();
console.log(myArray);
let number=myArray.unshift(888);
console.log(myArray, number);
myArray[2]=100;
console.log(myArray);
delete myArray[0];
console.log(myArray);
delete myArray[myArray.length-1];
console.log();
console.log(myArray);
console.log(myArray[myArray.length-1])