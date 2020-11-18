// function declaration 
greet(); // ******* differs in hoisting **********

// function declartion is when the first word is "function"

function greet() {
    console.log('Hi from greet')
}

//speak();

// function expression -- word function is the first word
const speak = () => {
    console.log('hi from speak -- function expression')
}


// function with arguments
const speakArgs = (args, location) => {
    console.log(`Hello ${args}, from ${location}`)
}

speakArgs('Jitesh', 'New York')

// function with default value

const speakArgsWithDefault = (name = 'Jack', location = 'Raebareli') => {
    console.log(`Hello ${name}, ${location}`);
}

speakArgsWithDefault('Sachin');

// arrow functions
const area = radius => 3.14 * radius ** 2;

console.log(area(5));

// Property method

const api = {
    add: function (x, y) {
        return x + y;
    },
    sub: function (x, y) {
        return x - y;
    }
}

api.multiply = (x, y) => {
    return x * y;
}

console.log(api.add(1, 10));


// ! functions are first class, treat function as variable

function greet() {
    console.log('hi');
}

function logGreeting(fn) {
    fn();
}

logGreeting(greet) // ? we don`t put paranthesis

