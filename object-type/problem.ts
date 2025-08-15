// 1번
let user: { name: string, age?: number, isAdmin: boolean } = { name: "Alice", isAdmin: true }

user = { name: "Bob", age: 40, isAdmin: false }

// 2번

let numbers: readonly number[] = [1, 2, 3, 4]

// numbers.push(4);
// numbers[0] = 42;

// 3번 

// const products: [string, number, boolean][] = [
//     ["Laptop", 1000, true],
//     ["Shoes", 50, false],
//     ["Book", 20, true],
// ]

// function getProductNamesAndPrices(
//     products: [string, number, boolean][]
// ): [string, number][] {
//     return products.map(([name, price]) => [name, price])
// }

// function getAvailableProducts(
//     products: [string, number, boolean][]
// ): [string, number, boolean][] {
//     return products.filter(([name, price, isStock]) => isStock);
// }

// console.log(getProductNamesAndPrices(products));

// console.log(getAvailableProducts(products));

// 4번

// function undateUser(user: { name: string; age?: number }): { name: string, age: number } {
//     return { ...user, age: user.age ?? 18 };
// }

// console.log(undateUser({ name: "Charlie" }))
// console.log(undateUser({ name: "Dana", age: 25 }))

// 5번

const products: { name: string; price: number; category?: string; }[] =
    [
        { name: "Laptop", price: 1000, category: "Electronics" },
        { name: "Shoes", price: 50, category: "Fashion" },
        { name: "Book", price: 20 },
    ];

function getProductsByCategory(category: string): string[] {
    return products.reduce((result: string[], product) => {
        if (product.category === category) {
            result.push(product.name);
        }
        return result
    }, [])
}

console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []