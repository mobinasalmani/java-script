let myArray=[1,6,5,8,13];
let result=myArray.find(myFunction);
function myFunction(value){
    return value>5;
}
console.log(result);