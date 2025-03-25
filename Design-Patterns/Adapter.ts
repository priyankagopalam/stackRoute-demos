// Legacy Payment System Code (Incompatible Interface)
class LegacyPaymentSystem {
    public makePayment(amountInCents: number, customerId: string): string {
        console.log(`Legacy payment system: Charging ${amountInCents} to customer ${customerId}`);
        return `Payment of ${amountInCents} processed for customer ${customerId}`;
    }
}

// Modern Payment Gateway
interface ModernPaymentGateway {
    pay(amountInDollars: number, userId: string): Promise<string>;
}

class LegacyPaymentAdapter implements ModernPaymentGateway {
    private legacyPaymentSystem: LegacyPaymentSystem;

    constructor(legacyPaymentSystem: LegacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }
    public async pay(amountInDollars: number, userId: string): Promise<string> {
        const amountInCents = amountInDollars * 100;
        const result = this.legacyPaymentSystem.makePayment(amountInCents, userId);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result);
            }, 2000);
        })
    }
}

class EcommerceApplication {
    private paymentGateway: ModernPaymentGateway;

    constructor(paymentGateway: ModernPaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    public async checkout(amountInDollars: number, userId: string): Promise<void> {
        console.log("Initializing Checkout....");
        const paymentResult = await this.paymentGateway.pay(amountInDollars, userId);
        console.log(paymentResult);
    }
}

const legacyPaymentSystem = new LegacyPaymentSystem();

const legacyPaymentAdapter = new LegacyPaymentAdapter(legacyPaymentSystem);

const ecommerceApp = new EcommerceApplication(legacyPaymentAdapter);

ecommerceApp.checkout(50, "user1")
    .then(() => console.log("Checkout completed successfully"))
    .catch((err) => console.error("Checkout failed", err));

