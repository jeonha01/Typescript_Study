interface IStudent { //객체 타입 정의할때만
    name: string;
    age?: number;
}

interface IPerson {
    name: string;
    age: number;
    gender: string;
}

interface IForeigner extends IPerson { // extends => IPerson의 타입을 가져오는 효과
    nationality: string;
}

type TForeigner = IPerson & { nationality: string, period: Date }

let american: IForeigner = { nationality: "american", name: "jeonha", age: 25, gender: "M" }

type TStudent = { //원시타입도 가능, 튜플타입
    name: string,
    age?: number
}

let a: object = {}
let b: { readonly name: string, age?: number } = { name: "jeonha" } // ?는 age가 있을수도 없을수도 readonly는 읽기만 가능 값 바꾸기 불가
let c: IStudent = { name: "gg", age: 23 }
let d: TStudent = { name: "a", age: 12 }
let e:

    let fruits: string[] = ["banana", "apple"]

let numberss: number[] = [1, 2, 3, 4] //배열은 Array<number> 이렇게 설정해도됨

let students: { name: string, age: number }[] = [{ name: "noona", age: 12 }, { name: "jone", age: 12 }]

let tuple: [string | number, number] // 튜플 타입 반드시 string과 number만 받기 가능 |유니온 타입으로 두가지 타입 정의 가능

tuple = [4, 23]