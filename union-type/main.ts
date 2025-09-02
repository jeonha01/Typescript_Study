type Track = {
    title: string,
    releaseDate: string,

}

type Artist = {
    name: string,
    releaseDate: string,
}

type SearchResult = Track | Artist

interface SearchResponse {
    searchResult: Track | Artist
}

let results: SearchResult[] = [{ title: "hello", releaseDate: "2024" }, { name: "hello", releaseDate: "2025" }]

function getName(result: Track | Artist) { // union 타입으로 리턴값을 지정하게 되면 확실히 타입을 정해줘야 한다
    return result.releaseDate
}

// 타입 좁히기

// 1. typeof -> 원시타입만 좁혀준다 객체타입 불가

// type SearchType = number | string;

// function searchByKeyword(keyword: SearchType): string {
//     // 넘버로 들어오는 타입은 스트링으로 바꿔주기
//     if (typeof keyword === "number") return keyword.toString()
//     return keyword
// }

// 2. instanceof 객체타입까지 좁혀준다

type Period = {
    start: string,
    end: string
}

type SearchType = Period | Date

function getDate(day: SearchType): Date {
    if (day instanceof Date) return day
    return new Date(day.start)
}