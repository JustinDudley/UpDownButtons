console.log("good connection");

let nbr = 0;  // get number into

// could write display();   here, and that would put the number into the input box. But that doesn't work.
// because display isn't defined as a function till later.  But if we put it at bottom:  that doesn't work
// either, because display has a ??null value??   The browser loads your stuff top down in the order
// you declare things.  So, inputCtrl doesn't exist yet.  Can't be read.  
// But: "" I LIKE setting fjslkjfk [scripts?]  ?my js?  in the head section.""  
//COULD move the script call down to the very end of the body.  Some advocate for this.
// Greg thinks that's confusing.  Too hard to keep track of stuff.  Other programs ?? may be inserting things
// down there as programs run


// onClick is an "event"
// onload is an event.  "This event will fire after everything else is successfully load.  THEN
// call this function, called Loaded"
// makes sure ALL body tags get loaded before the js gets loaded

// in C#, theh   compiler does it's whole thing first.  ALL functions are read in first.
// but js and html are loaded serially top down into the browser.  Must define method before you call it.
// order counts.



var display = () => {
    var nbrCtrl = document.getElementById("nbr");
    nbrCtrl.value = nbr; 
    nbrCtrl.style.color = (nbr % 2 == 0) ? "red" : "black"; // ternary
    nbrCtrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal"; 
    nbrCtrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal"; 
}


var increment = () => {
    nbr++;
    display();  // I left off the () here and in the two places below.  The one above, with lambda, didn't need them
}

var decrement = () => {
    nbr--;
    display();
}



// this gets around the issue of things getting loaded in th wrong order
var theLoadster = () => {
    display();
}



// function Increment(count) {
//     var inputCtrl = document.getElementById("toBeChanged");
//     inputCtrl.value += count;
// }

// function Decrement(count) {
//     var inputCtrl = document.getElementById("toBeChanged");
//     inputCtrl.value += count;
// }