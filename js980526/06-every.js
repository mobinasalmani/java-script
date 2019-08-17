let numbers=[1,12,18,11];
let result=numbers.every(myFunction);
function myFunction(value){
    return value>0;
}
console.log(result);