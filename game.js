//create secreNumber
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));
//check if guess is right
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT");
}
//check it if it's higher than guess
else if (secretNumber > guess) {
    alert("YOU HAVE CHOOSEN A SMALLER NUMBER");
}
//check it if it's lower than guess
else if (secretNumber < guess) {
    alert("YOU HAVE CHOOSEN A GREATER NUMBER");
} else {
    alert(" PLEASE ENTER A NUMBER");
}