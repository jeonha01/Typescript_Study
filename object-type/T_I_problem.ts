// 문제 1번
// interface IUser {
//     id: number;
//     name: string;
//     email?: string;
// }

// type TUser = {
//     id: number,
//     name: string,
//     email?: string,
// }

// 문제 2번
// type TUser = {
//     id: number,
//     name: string,
//     address: { city: string, zipCode: number }
// }

// const user: TUser = {
//     id: 1,
//     name: "Alice",
//     address: {
//         city: "Seoul",
//         zipCode: 12345,
//     }
// }

// 문제 3번
// interface IUser {
//     id: number;
//     name: string;
//     email?: string;
// }

// interface IAdmin extends IUser {
//     role: string;
// }

// const normalUser: IUser = {
//     id: 1,
//     name: "Alice",
//     email: "alice@example.com",
// }

// const adminUser: IAdmin = {
//     id: 2,
//     name: "Bob",
//     role: "Administrator",
// }

// 문제 4번
// type TProduct = {
//     id: number,
//     name: string,
//     price: number,
// }

// type TDiscountedProduct = TProduct & {
//     discount: number,
// }

// const normalProduct: TProduct = {
//     id: 1,
//     name: "Laptop",
//     price: 1000,
// }

// const discountedProduct: TDiscountedProduct = {
//     id: 2,
//     name: "Smartphone",
//     price: 800,
//     discount: 10,
// }

// 문제 5번
// type TProduct = {
//     id: number,
//     name: string,
//     price: number,
// }

// type TOrder = {
//     orderId: number,
//     products: TProduct[],
//     totalPrice: number,
// }

// const order: TOrder = {
//     orderId: 101,
//     products: [
//         { id: 1, name: "Laptop", price: 1000 },
//         { id: 2, name: "Mouse", price: 50 },
//     ],
//     totalPrice: 1050,
// }

// 문제 6번
// interface BaseUser {
//     id: number;
//     name: string;
// }

// type AdminUser = BaseUser & {
//     role: string,
// }

// type GuestUser = BaseUser & {
//     visitCount: number,
// }

// const admin: AdminUser = {
//     id: 1,
//     name: "Alice",
//     role: "Administrator",
// }

// const guest: GuestUser = {
//     id: 2,
//     name: "Bob",
//     visitCount: 5,
// }