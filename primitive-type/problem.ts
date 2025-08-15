let userName: string
let useAge: Number
let isAdmin: boolean

userName = "Alice";
useAge = 25;
isAdmin = true;

let productName: string = "강전하"
let productPrice: number = 10000
let isAvailable: boolean = false

console.log(`상품명:${productName}, 가격:${productPrice}, 재고여부:${isAvailable}`)

function addNumbers(a: number, b: number): number {
    return a + b
}

console.log(addNumbers(5, 3))

function stringifyValue(value: string | null | undefined) {
    if (value) {
        return value
    } else {
        return "값이 없습니다"
    }
}

console.log(stringifyValue("Hello"))
console.log(stringifyValue(null))
console.log(stringifyValue(undefined))

function compareValues(a: unknown, b: unknown): string {
    if (a === b) {
        return "엄격한 동등성"
    } else if (a == b) {
        return "느슨한 동등성"
    } else {
        return "동등하지 않음"
    }
}

console.log(compareValues(5, "5")) // 동등하지 않음
console.log(compareValues(null, undefined)) // 동등하지 않음
console.log(compareValues(false, 0)) // 동등하지 않음
console.log(compareValues(NaN, NaN)) // 엄격한 동등성
console.log(compareValues(42, 42)) // 엄격한 동등성

function isPrimitive(value: unknown): boolean {
    return value === null || (value !== Object(value))
}

console.log(isPrimitive("Hello"))
console.log(isPrimitive(42))
console.log(isPrimitive(false))
console.log(isPrimitive(null))
console.log(isPrimitive(undefined))
console.log(isPrimitive({}))
console.log(isPrimitive([]))