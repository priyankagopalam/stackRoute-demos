//Currying in JS

function Add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// Calling function with Currying technique
console.log(Add(10)(20)(30));

// Calling closure functions
const x = Add(10);
const y = x(20);
const z = y(30);
console.log(z);


function logger(level) {

    // some business logic here

    return function (message) {
        console.log(`[${level}: ${message}]`);
    }
}

logger('Error')('Something went wrong');
logger('Info')('Server Started');
