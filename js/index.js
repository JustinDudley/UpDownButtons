
console.log("good connection");

var nbr = 0;

function displayNumb() {
    var numbCtrl = document.getElementById("delta");
    numbCtrl.value = nbr;
    numbCtrl.style.color = (nbr % 2 == 0)? "red":"black";
    numbCtrl.style.fontStyle = (nbr % 4 == 0)? "italic":"normal";
    numbCtrl.style.fontWeight = (nbr % 3 == 0)? "bold":"normal";
}

function downify() {
    nbr--;
    displayNumb();
}

function upify() {
    nbr++;
    displayNumb();
}