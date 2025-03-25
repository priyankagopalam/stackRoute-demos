var ConcreteStock = /** @class */ (function () {
    function ConcreteStock(symbol, price) {
        this.investors = [];
        this.symbol = symbol;
        this.price = price;
    }
    ConcreteStock.prototype.registerObserver = function (observer) {
        this.investors.push(observer);
    };
    ConcreteStock.prototype.removeObserver = function (observer) {
        var index = this.investors.indexOf(observer);
        if (index !== -1) {
            this.investors.splice(index, 1);
        }
    };
    ConcreteStock.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.investors; _i < _a.length; _i++) {
            var Investor = _a[_i];
            Investor.update(this.symbol, this.price);
        }
    };
    ConcreteStock.prototype.setPrice = function (newPrice) {
        if (this.price !== newPrice) {
            this.price = newPrice;
            this.notifyObservers();
        }
    };
    return ConcreteStock;
}());
var ConcreteInvestor = /** @class */ (function () {
    function ConcreteInvestor(name) {
        this.name = name;
    }
    ConcreteInvestor.prototype.update = function (stockSymbol, price) {
        console.log("Investor ".concat(this.name, " received update: ").concat(stockSymbol, " is now at price: ").concat(price));
    };
    return ConcreteInvestor;
}());
// Creating an instance of a ConcreteStock class to create a stock
var tata = new ConcreteStock("TATA", 150);
// Creating investors by creating instance of ConcreteInvestor class
var investor1 = new ConcreteInvestor("Amit");
var investor2 = new ConcreteInvestor("Ram");
var investor3 = new ConcreteInvestor("Shyam");
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
