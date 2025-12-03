// type ArrayType<T> = T[]

// const numberArray: ArrayType<number> = [1, 2, 3]
// const stringArray: ArrayType<string> = ["a", "b"]

// 영화 정보
// {
//     status: "ok",
//         totalPage: 20,
//             totalResult: 300,
//                 page: 1,
//                     data: [{ title: "기생충", genre: "액션" }, { title: "파묘", genre: "공포" }, { title: "7번방의 선물", genre: "가족" }]
// }

// TV 정보
// {
//     status: "ok",
//         totalPage: 20,
//             totalResult: 300,
//                 page: 1,
//                     data: [{ series: "논스톱", runningTime: "120" }]
// }

// type CategoryResponse = {
//     status: string,
//     totalPage: number,
//     totalResult: number,
//     page: number,
//     data: { name: string }[]
// }

// type MovieResponse = {
//     status: string,
//     totalPage: number,
//     totalResult: number,
//     page: number,
//     data: { title: string, genre: string }[]
// }

type ApiResponse<T> = {
    status: string,
    totalPage: number,
    totalResult: number,
    page: number,
    data: T[]
}

type Category = {
    name: string
}

// type Movie = { title: string, genre: string }

type CategoryResponse = ApiResponse<Category>
type MovieResponse = ApiResponse<Movie>

let movieData: MovieResponse = {
    status: "ok",
    totalPage: 20,
    totalResult: 300,
    page: 1,
    data: [{ title: "기생충", genre: "액션" }, { title: "파묘", genre: "공포" }, { title: "7번방의 선물", genre: "가족" }]
}

// function useState<T>(초기화값: T): [T, 함수<T>] {
//     return [값, 함수]
// }

// const [value, setValue] = useState(true)

// const [value2, setValue2] = useState<boolean>(false) // 제네릭 값으로 값을 넣어주자, 개발자가 헷갈리지 않게

interface Length {
    length: number
}

function getValue<T extends Length>(data: T) { // 타입 확장
    console.log(data.length)
}

console.log(getValue("hello"))

// 1. 조건부 타입
type IsString<T> = T extends string ? string : Category;

type result1 = IsString<number>

// 2. mapped type
type Movie = {
    title?: string;
    genre?: string;
    rate?: number;
}

type Subset<T> = {
    [K in keyof T]?: T[K] // T의 KEY들을 갖고온다 
}

const movie1: Subset<Movie> = { title: "기생충", genre: "액션" }

interface Pair<T, U> {
    first: T,
    second: U,
    display(): void
}

const pair: Pair<string, number> = {
    first: "noona",
    second: 2,
    display() {
        console.log(this.first + "는" + this.second + "살 입니다")
    }
}

pair.display();