// Define a function that prints a message to the console
function printMessage(message) {
    console.log(message);
}

// Define a function that formats a greeting
function formatGreeting(name) {
    return `Hello, ${name}!`;
}

// Prompt the user for their name
let userName = prompt("Please enter your name:");

// Check if the user entered a name
if (userName) {
    // If a name was entered, format a greeting and print it
    let greeting = formatGreeting(userName);
    printMessage(greeting);
} else {
    // If no name was entered, print a generic greeting
    printMessage("Hello, World!");
}

// Create an array of programming languages
let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Iterate through the array and print each language
printMessage("Some popular programming languages:");
for (let i = 0; i < programmingLanguages.length; i++) {
    printMessage(`- ${programmingLanguages[i]}`);
}

// Define an object representing a person
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Access and print properties of the person object
printMessage("Person Information:");
printMessage(`First Name: ${person.firstName}`);
printMessage(`Last Name: ${person.lastName}`);
printMessage(`Age: ${person.age}`);

// Calculate and print the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
printMessage(`Sum of numbers from 1 to 10: ${sum}`);

// Define a function that calculates the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculate and print the factorial of 5
let num = 5;
let result = factorial(num);
printMessage(`Factorial of ${num}: ${result}`);
