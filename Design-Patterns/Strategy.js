var StandardShipping = /** @class */ (function () {
    function StandardShipping() {
    }
    StandardShipping.prototype.calculateCost = function (weight, distance) {
        return weight * 0.5 + distance * 0.1;
    };
    return StandardShipping;
}());
var ExpressShipping = /** @class */ (function () {
    function ExpressShipping() {
    }
    ExpressShipping.prototype.calculateCost = function (weight, distance) {
        return weight * 1.0 + distance * 0.5;
    };
    return ExpressShipping;
}());
var OvernightShipping = /** @class */ (function () {
    function OvernightShipping() {
    }
    OvernightShipping.prototype.calculateCost = function (weight, distance) {
        return weight * 2.0 + distance * 1.0;
    };
    return OvernightShipping;
}());
var ShippingCostCalculator = /** @class */ (function () {
    function ShippingCostCalculator(strategy) {
        this.strategy = strategy;
    }
    ShippingCostCalculator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ShippingCostCalculator.prototype.calculate = function (weight, distance) {
        return this.strategy.calculateCost(weight, distance);
    };
    return ShippingCostCalculator;
}());
var standardShipping = new StandardShipping();
var expressShipping = new ExpressShipping();
var overnightShipping = new OvernightShipping();
var calculator = new ShippingCostCalculator(standardShipping);
console.log("Standard Shipping Cost:", calculator.calculate(10, 100));
calculator.setStrategy(expressShipping);
console.log("Express Shipping Cost:", calculator.calculate(10, 100));
calculator.setStrategy(overnightShipping);
console.log("Overnight Shipping Cost:", calculator.calculate(10, 100));
