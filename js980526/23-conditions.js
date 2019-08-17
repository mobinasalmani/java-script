let text = "";
// let currentDay = new Date().getDay();
switch (new Date().getDay()) {
    
        
    case 2:
    case 3:          
    case 4:      
    case 5: 
    case 6:
        text="working day";
        break;
    case 0: 
    case 1:
        text="weekend";
        break;
    default:
        text="unknown";
        
}
console.log(text);