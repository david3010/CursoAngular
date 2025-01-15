interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S10',
    price: 500
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 900
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({ products, tax }: TaxCalculationOptions): [number, number] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { products, tax } = options;

    let total = 0;

    products.forEach(({ price }) => total += price);

    return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.16;

let [total, taxTotal] = taxCalculation({ tax, products: shoppingCart });

console.log(`Total: ${total}, Tax: ${taxTotal}`);