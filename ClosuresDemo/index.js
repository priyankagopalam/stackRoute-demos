function outerFunction() {
    let outerVariable = "I am the variable from outer function";

    function innerFunction() {
        console.log(outerVariable); // Accessible due to lexical scope
    }

    return innerFunction;
}

let x = outerFunction(); // outerfunction is returning the inner function
x(); //innerfunction is going to execute here


function counter() {
    let count = 0; // private variable

    return function () {
        count++;
        console.log(count);
    }
}

const count = counter();
count();
count();
count();

function calculator(num) {
    function multiplier(number) {
        return number * num;
    }

    return multiplier;
}

const result = calculator(2);
console.log(result(5));