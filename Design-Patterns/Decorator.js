var BasicCoffee = /** @class */ (function () {
    function BasicCoffee() {
    }
    BasicCoffee.prototype.getCost = function () {
        return 5;
    };
    BasicCoffee.prototype.getDescription = function () {
        return "Basic Coffee";
    };
    return BasicCoffee;
}());
var MilkDecorator = /** @class */ (function () {
    function MilkDecorator(coffee) {
        this.coffee = coffee;
    }
    MilkDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 2;
    };
    MilkDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Milk";
    };
    return MilkDecorator;
}());
var SugarDecorator = /** @class */ (function () {
    function SugarDecorator(coffee) {
        this.coffee = coffee;
    }
    SugarDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 1;
    };
    SugarDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Sugar";
    };
    return SugarDecorator;
}());
var WhippedCreamDecorator = /** @class */ (function () {
    function WhippedCreamDecorator(coffee) {
        this.coffee = coffee;
    }
    WhippedCreamDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + 3;
    };
    WhippedCreamDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", Whipped Cream";
    };
    return WhippedCreamDecorator;
}());
var basicCoffee = new BasicCoffee();
console.log("Basic Coffee");
console.log("Description:", basicCoffee.getDescription());
console.log("Cost:", basicCoffee.getCost());
var milkCoffee = new MilkDecorator(basicCoffee);
console.log("Milk Coffee");
console.log("Description:", milkCoffee.getDescription());
console.log("Cost:", milkCoffee.getCost());
var fancyCoffee = new MilkDecorator(new SugarDecorator(new WhippedCreamDecorator(basicCoffee)));
console.log("Fancy Coffee");
console.log("Description:", fancyCoffee.getDescription());
console.log("Cost:", fancyCoffee.getCost());
