let a: object = {}
let b: { readonly name: string, age?: number } = { name: "jeonha" } // ?는 age가 있을수도 없을수도 readonly는 읽기만 가능 값 바꾸기 불가
let c: { name: string, age: number } = { name: "gg", age: 23 }

let fruits: string[] = ["banana", "apple"]

let numberss: number[] = [1, 2, 3, 4] //배열은 Array<number> 이렇게 설정해도됨

let students: { name: string, age: number }[] = [{ name: "noona", age: 12 }, { name: "jone", age: 12 }]

let tuple: [string | number, number] // 튜플 타입 반드시 string과 number만 받기 가능 |유니온 타입으로 두가지 타입 정의 가능

tuple = [4, 23]