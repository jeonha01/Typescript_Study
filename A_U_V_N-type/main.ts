// any 어떤 값도 허용 백엔드와 연동시 API 명세서에 타입이 정해지지 않을때? 사용
let a: any = "noona"
a = 3
a = true

// unknown 어떤 타입인지 확정을 해주어야 한다

let b: unknown = 3
b = 3
b = true

let anyType: any;
let unknownType: unknown;

anyType = "hello";
unknownType = "hello";

console.log(anyType.toUpperCase()); // any타입은 타입 확정 필요x

if (typeof unknownType === "string") { // unknown타입은 타입 확정해야한다
    console.log(unknownType.toUpperCase());
}

// void 함수의 타입을 지정할 때 리턴 타입을 지정

function double(a, b): void {
    console.log(a, b)
}

interface NewType {
    name: string;
    age: number;
    double: (a: number, b: number) => void
    getAge: (age: number) => void
}

// never 리턴 타입이 있을 수가 없다

function infinte(): never {
    while (true) {

    }
}

function throwError(): never {
    throw new Error("에러")
}

type AorB = { a: number, b?: never } | { a?: never, b: number }

let c: AorB = {
    a: 2,
}