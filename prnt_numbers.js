console.log("We are printing all numbers between -10 and 19");
var count = -10;
while (count < 20) {
    console.log(count);
    count++;
}

console.log("We are printing all Even numbers between 10 and 40");
var count = 12;
while (count < 40) {
    console.log(count);
    count += 2;
}

console.log("We are printing all Even numbers between 10 and 40");
var count = 12;
while (count < 40) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++;
}


console.log("We are printing all Odd numbers between 300 and 333");
var count = 301;
while (count < 333) {
    console.log(count);
    count += 2;
}

console.log("We are printing all numbers divisible by 5 and 3 between 5 and 50");


var number = 5;

while (number < 50) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number);
    }
    number++;
}