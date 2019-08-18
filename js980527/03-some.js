let numbers=[25,88,66,99];
let result=numbers.some(myFunction);
function myFunction(value){
    return value==88 || value==99  ;
}
console.log(result);
