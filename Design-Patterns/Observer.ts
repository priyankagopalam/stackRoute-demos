interface Investor {
    update(stockSymbol: string, price: number): void;
}

interface Stock {
    registerObserver(observer: Investor): void;
    removeObserver(observer: Investor): void;
    notifyObservers(): void;
}

class ConcreteStock implements Stock {
    private symbol: string;
    private price: number;
    private investors: Investor[] = [];

    constructor(symbol: string, price: number) {
        this.symbol = symbol;
        this.price = price;
    }

    public registerObserver(observer: Investor): void {
        this.investors.push(observer);
    }

    public removeObserver(observer: Investor): void {
        const index = this.investors.indexOf(observer);
        if (index !== -1) {
            this.investors.splice(index, 1);
        }
    }

    public notifyObservers(): void {
        for (const Investor of this.investors) {
            Investor.update(this.symbol, this.price);
        }
    }

    public setPrice(newPrice: number): void {
        if (this.price !== newPrice) {
            this.price = newPrice;
            this.notifyObservers();
        }
    }
}

class ConcreteInvestor implements Investor {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public update(stockSymbol: string, price: number): void {
        console.log(`Investor ${this.name} received update: ${stockSymbol} is now at price: ${price}`);
    }
}

// Creating an instance of a ConcreteStock class to create a stock
const tata = new ConcreteStock("TATA", 150);

// Creating investors by creating instance of ConcreteInvestor class
const investor1 = new ConcreteInvestor("Amit");
const investor2 = new ConcreteInvestor("Ram");
const investor3 = new ConcreteInvestor("Shyam");

// Register investors to the stock
tata.registerObserver(investor1);
tata.registerObserver(investor2);
tata.registerObserver(investor3);

// Update the stock price (investors will be notified)
console.log("Updating stock price to 180");
tata.setPrice(180);

// Remove an investor and update the price again
console.log("Removing investor Ram and updating the stock price to 170");
tata.removeObserver(investor2);
tata.setPrice(170);