interface ShippingStrategy {
    calculateCost(weight: number, distance: number): number;
}

class StandardShipping implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * 0.5 + distance * 0.1
    }
}

class ExpressShipping implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * 1.0 + distance * 0.5
    }
}

class OvernightShipping implements ShippingStrategy {
    calculateCost(weight: number, distance: number): number {
        return weight * 2.0 + distance * 1.0
    }
}

class ShippingCostCalculator {
    private strategy: ShippingStrategy;
    constructor(strategy: ShippingStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: ShippingStrategy): void {
        this.strategy = strategy;
    }

    public calculate(weight: number, distance: number): number {
        return this.strategy.calculateCost(weight, distance);
    }
}

const standardShipping = new StandardShipping();
const expressShipping = new ExpressShipping();
const overnightShipping = new OvernightShipping();

const calculator = new ShippingCostCalculator(standardShipping);
console.log("Standard Shipping Cost:", calculator.calculate(10, 100));

calculator.setStrategy(expressShipping);
console.log("Express Shipping Cost:", calculator.calculate(10, 100));

calculator.setStrategy(overnightShipping);
console.log("Overnight Shipping Cost:", calculator.calculate(10, 100));