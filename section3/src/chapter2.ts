/**
 * 기본 타입 간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // Up Cast O
// num2 = num1; // Down Cast X

/**
 * 객체 타입 간의 호환성
 * - 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
// (name, color만 있으면 모두 Animal 타입이 될 수 있음)
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

animal = dog; // Up Cast O
console.log(animal); // { name: '돌돌이', color: 'brown', breed: '진돗개' }

// dog = animal; // Down Cast X

// =====================================

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // Up Cast O
console.log(book); // { name: '한입 크기로 잘라먹는 리액트', price: 33000, skill: 'reactjs' }

// programmingBook = book; // Down Cast X

// =====================================

/**
 * ts의 초과 프로퍼티 검사
 * - 객체 초기화 시 명시되지 않은 속성을 넣고 싶을 때
 */

// 객체 리터럴로 초기화 -> 오류
let book2: Book = {
  name: "한입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};

// 가능
let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "한입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs", --> X
});

func(programmingBook); // --> O
