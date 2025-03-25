interface Coffee {
    getCost(): number;
    getDescription(): string;
}

class BasicCoffee implements Coffee {
    getCost(): number {
        return 5;
    }
    getDescription(): string {
        return "Basic Coffee";
    }
}

class MilkDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    getCost(): number {
        return this.coffee.getCost() + 2;
    }
    getDescription(): string {
        return this.coffee.getDescription() + ", Milk";
    }
}

class SugarDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    getCost(): number {
        return this.coffee.getCost() + 1;
    }
    getDescription(): string {
        return this.coffee.getDescription() + ", Sugar";
    }
}

class WhippedCreamDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    getCost(): number {
        return this.coffee.getCost() + 3;
    }
    getDescription(): string {
        return this.coffee.getDescription() + ", Whipped Cream";
    }
}

const basicCoffee = new BasicCoffee();
console.log("Basic Coffee");
console.log("Description:", basicCoffee.getDescription());
console.log("Cost:", basicCoffee.getCost());

const milkCoffee = new MilkDecorator(basicCoffee);
console.log("Milk Coffee");
console.log("Description:", milkCoffee.getDescription());
console.log("Cost:", milkCoffee.getCost());

const fancyCoffee = new MilkDecorator(new WhippedCreamDecorator(basicCoffee));
console.log("Fancy Coffee");
console.log("Description:", fancyCoffee.getDescription());
console.log("Cost:", fancyCoffee.getCost());