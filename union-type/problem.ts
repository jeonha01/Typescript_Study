// function processInput(
//    input: number[] | string[] | { message: string }
// ){
//   if (Array.isArray(input)) {
//         if (input.length === 0) {
//             throw new Error("빈 배열은 타입을 판단할 수 없습니다.");
//         }
//         if (input.every(el => typeof el === "number")) {
//             return input.reduce((sum, num) => sum + num, 0);
//         }
//         if (input.every(el => typeof el === "string")) {
//             return input.join("");
//         }

//     }

//     if ("message" in input) {
//         return input.message.toUpperCase();
//     }
// }

// console.log(processInput([1, 2, 3])); // 6
// console.log(processInput(["hello", "world"])); // "helloworld"
// console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"

// class Car {
//     public brand: string;
//     constructor(brand: string) {
//         this.brand = brand;
//     }
// }

// class Bike {
//     constructor(public type: string) { } // 축약형
// }

// function processVehicle(vehicle: Car | Bike): string {
//     if (vehicle instanceof Car) {
//         return vehicle.brand.toUpperCase();
//     } else if (vehicle instanceof Bike) {
//         return `Bike: ${vehicle.type}`;
//     } else {
//         throw new Error("유효하지 않은 Vehicle 타입입니다.");
//     }
// }

// const myCar = new Car("Tesla");
// const myBike = new Bike("Mountain");

// console.log(processVehicle(myCar)); // "TESLA"
// console.log(processVehicle(myBike)); // "Bike: Mountain"

// type Admin = { type: "admin"; permissions: string[] };
// type User = { type: "user"; email: string };

// function processUser(user: Admin | User): string {
//     if ("permissions" in user) {
//         return user.permissions.join();
//     } else if ("email" in user) {
//         return user.email;
//     }else{
//         throw new Error("에러가 발생했습니다")
//     }
// }

// console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
// console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// // console.log(processUser({ type: "guest" })); // 에러 발생

// type Rectangle = { width: number; height: number };
// type Circle = { radius: number };

// // 사용자 정의 타입 가드
// function isRectangle(shape: unknown): shape is Rectangle {
//     return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !== undefined;
// }

// function calculateArea(shape: Rectangle | Circle): number {
//   if (isRectangle(shape)) {
//     return shape.width * shape.height; // 사각형 넓이 계산
//   } else {
//     return Math.PI * shape.radius ** 2; // 원 넓이 계산
//   }
// }

// // 테스트 코드
// console.log(calculateArea({ width: 10, height: 5 })); // 50
// console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

// 해결된 유니온 타입 정의
// type Square = { type: "square"; side: number };
// type Circle = { type: "circle"; radius: number };

// type Shape = Square | Circle;

// // 넓이를 계산하는 함수
// function calculateArea(shape: Shape): number {
//     switch (shape.type) {
//     case "square":
//       return shape.side ** 2; // 사각형의 넓이
//     case "circle":
//       return Math.PI * shape.radius ** 2; // 원의 넓이
//     default:
//       // Exhaustiveness check
//       const _exhaustive: never = shape;
//       throw new Error(`Unhandled shape type: ${_exhaustive}`);
//   }
// }

// // 테스트 코드
// console.log(calculateArea({ type: "square", side: 5 })); // 25
// console.log(calculateArea({ type: "circle", radius: 7 })); // 153.93804002589985