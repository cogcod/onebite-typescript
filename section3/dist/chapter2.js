/**
 * 기본 타입 간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2; // Up Cast O
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진돗개",
};
animal = dog; // Up Cast O
console.log(animal); // { name: '돌돌이', color: 'brown', breed: '진돗개' }
let book;
let programmingBook = {
    name: "한입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook; // Up Cast O
// programmingBook = book; // Down Cast X
console.log(book);
export {};
// let book2: Book = {
//   name: "한입 크기로 잘라먹는 리액트",
//   price: 33000,
//   skill: "reactjs",
// };
