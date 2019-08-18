let text="";
let time=new Date().getHours();

if (time<10) {
    text="good morning";
    
} else if(time<20) {
    text="good day";
}
else{
    text="good evening";
}
console.log(text);