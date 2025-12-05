// 1. Omit

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    age: number;
}

// interface PublicUser {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

type PublicUser = Omit<User, "password" | "age"> // 패스워드 정보만 빼고 복사시킴 -> Omit

// let userProfile: PublicUser = {
//     id: 2,
//     name: "noona",
//     email: "asdf"
//     // age:,  age와 password는 제외했기 때문에 들어갈 수가 없다
//     // password,
// }

// 2. Pick

// interface BasicUserInfo {
//     id: number,
//     name: string
// }

type BasicUserInfo = Pick<User, "id" | "name"> // 필요한 타입만을 재사용

// 3. Partial 

interface Address {
    street: string;
    city: string;
    country: string;
}

const updateAddress = (address: Partial<Address>) => { // 모든 타입에 ?한 것과 같은 기능을 부여함
    console.log(address);
}

updateAddress({ street: "234", city: "incheon" }) // country가 없어도 에러가 안 생긴다