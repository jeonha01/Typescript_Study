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