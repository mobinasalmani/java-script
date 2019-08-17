let numbers=[7,3,22,5,44];
let result =  numbers.findIndex(function (value){
    return value>5;
});

console.log(result);
console.log(numbers[result]);