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

user_input1 = prompt("Enter an operation (add, subtract, multiply, divide): ");

if(user_input1 == "add" || user_input1 == "Add"){
user_input2 = parseInt(prompt("Enter a number to add: "));
user_input3 = parseInt(prompt("Enter another number to add: "));

    let sum = add(user_input2, user_input3);
    console.log("The sum of " + user_input2 + " and " + user_input3 + " is " + sum);
}
if(user_input1 == "subtract" ||user_input1 == "Subtract"){
user_input4 = parseInt(prompt("Enter a number to subtract: "));
user_input5 = parseInt(prompt("Enter another number to subtract from previous: "));

    let difference = subtract(user_input4, user_input5);
    console.log("The difference of " + user_input4 + " and " + user_input5 + " is " + difference);
}
if(user_input1 == "multiply" ||user_input1 == "Multiply"){
user_input6 = parseInt(prompt("Enter a number to multiply: "));
user_input7 = parseInt(prompt("Enter another number to multiply: "));

    let product = multiply(user_input6, user_input7);
    console.log("The product of " + user_input6 + " and " + user_input7 + " is " + product);
}
if(user_input1 == "divide" ||user_input1 == "Divide"){
user_input8 = parseInt(prompt("Enter a number to divide: "));
user_input9 = parseInt(prompt("Enter another number to divide from previous: "));

    let quotient = divide(user_input8, user_input9);
    console.log("The quotient of " + user_input8 + " and " + user_input9 + " is " + quotient);
}

else{
    console.log("Invalid operation.");
}