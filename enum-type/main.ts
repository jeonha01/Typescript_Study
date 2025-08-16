//Female Male
const enum Gender {
    FEMALE = "Female",
    MALE = "Male",
}

const enum SearchType { // 반드시 값을 지정해주자
    Date = "Date",
    KEYWORD = "Keyword",
    ORDER = "Order",
}
console.log("hey", SearchType.KEYWORD)
let gender: Gender = Gender.MALE; 