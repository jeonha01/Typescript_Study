// // 문제 1
// function getFirstElement<T>(array: T[]): T | undefined {
//     return array[0];
// }

// // 테스트 코드
// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement(["a", "b", "c"])); // "a"
// console.log(getFirstElement([])); // undefined

// // 문제 2
// // 매개변수, 리턴타입 정의 필요 
// function isNumberArray<T>(array: T[]): boolean {
//     return array.every((item) => typeof item === "number");
// }

// // 테스트 코드
// console.log(isNumberArray([1, 2, 3])); // true
// console.log(isNumberArray(["a", "b", "c"])); // false
// console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)

// 문제 3
// type IsArray<T> = T extends Array<any> ? true : false;

// // 문제 4
// // Mapped Type 정의
// type WithDefault<T> = {
//     [K in keyof T]: [T[K], T[K]];
// };

// // 테스트 코드
// type Original = { id: number; name: string; isActive: boolean };
// type WithDefaults = WithDefault<Original>;

// // 기대 결과:
// // type WithDefaults = {
// //   id: [number, number];
// //   name: [string, string];
// //   isActive: [boolean, boolean];
// // }

// 문제 5
// function createObject<K, V>(key: K, value: V): { [P in K]: V } {
//     return { [key]: value } as { [P in K]: V };
// }

// // 테스트 코드
// console.log(createObject("id", 123)); // { id: 123 }
// console.log(createObject("name", "Alice")); // { name: "Alice" }

// // 문제 6
// // 매개변수, 리턴 타입 정의 필요 
// function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
//     return array.map((item) => item[key]);
// }

// // 테스트 코드
// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
// ];

// console.log(pluck(users, "id")); // [1, 2]
// console.log(pluck(users, "name")); // ["Alice", "Bob"]