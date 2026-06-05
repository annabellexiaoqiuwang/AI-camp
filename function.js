function printhello(name){
    console.log("Hello, " + name + "!");
}

user_input = prompt("What is your name?");
printhello(user_input);

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
user_input1 = parseInt(prompt("Enter a number to add: "));
user_input2 = parseInt(prompt("Enter another number to add: "));

let sum = add(user_input1, user_input2);
console.log("The sum of " + user_input1 + " and " + user_input2 + " is " + sum);

user_input3 = parseInt(prompt("Enter a number to subtract: "));
user_input4 = parseInt(prompt("Enter another number to subtract from previous: "));

let difference = subtract(user_input3, user_input4);
console.log("The difference of " + user_input3 + " and " + user_input4 + " is " + difference);

user_input5 = parseInt(prompt("Enter a number to multiply: "));
user_input6 = parseInt(prompt("Enter another number to multiply: "));

let product = multiply(user_input5, user_input6);
console.log("The product of " + user_input5 + " and " + user_input6 + " is " + product);

user_input7 = parseInt(prompt("Enter a number to divide: "));
user_input8 = parseInt(prompt("Enter another number to divide from previous: "));

let quotient = divide(user_input7, user_input8);
console.log("The quotient of " + user_input7 + " and " + user_input8 + " is " + quotient);