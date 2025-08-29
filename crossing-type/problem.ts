// 1번
// type Product = {
//     id: number,
//     name: string,
//     price: number,
// }

// type Discount = {
//     discountPercentage: number
// }

// function calculateDiscountedPrice(item: Product & Discount): number {
//     return item.price - (item.price * item.discountPercentage) / 100;
// }

// const discountedProduct = {
//     id: 101,
//     name: "Laptop",
//     price: 1000,
//     discountPercentage: 20,
// }

// 2번
// type ContactInfo = {
//     phone: string,
//     address: string,
// }

// type OrderInfo = {
//     orderId: number,
//     items: string[],
// }

// function printOrderSummary(order: ContactInfo & OrderInfo): string {
//     return `Order ${order.orderId} (Phone: ${order.phone})`;
// }

// const orderDetails = {
//     phone: "123-456-7890",
//     address: "123 Main St",
//     orderId: 2023,
//     items: ["Laptop", "Mouse"],
// };

// 3번
// type Profile = {
//     id: number,
//     name: string,
//     email: string,
// }

// type Activity = {
//     lastLogin: Date,
//     actions: string[],
// }

// function mergeUserData(profile: Profile, activity: Activity): Profile & Activity {
//     return { ...profile, ...activity }; // es6 스프레드 문법
// }

// function getUserSummary(user: Profile & Activity): string {
//     const id = user.id.toString();
//     return `사용자 ${id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
// }

// const profile = { id: 1, name: "Alice", email: "alice@example.com" };
// const activity = {
//     lastLogin: new Date("2024-01-01T10:00:00Z"),
//     actions: ["login", "viewed dashboard", "logout"],
// };

// const mergedUser = mergeUserData(profile, activity);
// console.log(getUserSummary(mergedUser));