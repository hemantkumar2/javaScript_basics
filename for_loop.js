for (var count = 0; count < 6; count++) {
    console.log(count);
}

//Printing all the character of a string with for loop
console.log("Printing all the characters of a string hello ");
var str = "hello";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log("Printing all the numbers from -10 to 19");
for (var i = -10; i <= 19; i++) {
    console.log(i);
}
console.log("Printing all the even numbers from 10 to 40");
for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Printing all the odd numbers from 300 to 333");
for (var i = 300; i <= 333; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

console.log("Printing all numbers which are divisible by 3 and 5, form 5 to 50 ");
for (var i = 5; i <= 50; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}