class Payment {
    process(amount: number): void {
        console.log("Payment processed");
    }
}

class CreditCardPayment extends Payment {
    process(amount: number): void {
        console.log("Payment is processed with credit card");
    }
}

class UpiPayment extends Payment {
    process(amount: number): void {
        console.log("Payment is processed with Upi");
    }
}

const paymentMethod1: Payment = new CreditCardPayment();
paymentMethod1.process(1000); //

const paymentMethod2: Payment = new UpiPayment();
paymentMethod1.process(1000); //