class Discount {
    getDiscount(type: string): number {
        if (type === "Regular") return 10;
        if (type === "Premium") return 20;
        return 0;
    }
}


abstract class NewDiscount {
    abstract getDiscount(): number;
    display(): void{
        console.log('Hello');
    }
}

class RegularDiscount extends NewDiscount {
    getDiscount(): number {
        return 10;
    }
}

class PremiumDiscount extends NewDiscount{
    getDiscount(): number {
        return 20;
    }
}

const discount = new RegularDiscount();
console.log(discount.getDiscount());