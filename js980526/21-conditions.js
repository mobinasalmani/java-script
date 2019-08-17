let text="";
let currentday=new Date().getDay();
if (currentday==0) {
    text="Sunday";
} else if(currentday==1) {
   text="Monday"; 
}else if(currentday==2) {
    text="Tuesday";
}else if(currentday==3) {
    text="Wednesday";
}else if(currentday==4) {
    text="Thursday";
}else if(currentday==5) {
    text="Friday";
}else if(currentday==6) {
    text="Saturday";
}else{
    text="unknown";
}
console.log(text);
