/*
Func1
Func2
Func3
Func4
Func5
*/

interface ICalculator {
    add(a, b): void
    subtract(a, b): void
    multiply(a, b): void
}

class Calculator implements ICalculator {
    add(a, b) {
        console.log(a + b);
    }
    subtract(a, b) {
        console.log(a - b);
    }
    multiply(a, b) {
        console.log(a * b);
    }
}

interface IUser {
    saveDataToDatabase(): void
}

interface ISendEmail {
    send(): void
}

interface IPayment {
    process(): void
}

class App implements IUser {
    
}

class App2 implements ISendEmail{

}