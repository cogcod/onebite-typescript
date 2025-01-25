/**
 * 대수 타입
 * - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합 타입 / 교집합 타입
 */

/**
 * 1. 합집합 타입 (Union Type)
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

// 배열의 union type
let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체의 union type
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // 타입에 타입 넣기

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  // 모든 프로퍼티 입력 가능
  name: "",
  color: "",
  language: "",
};

// 합집합 어디에도 포함되지 않아 사용 불가
// let union4: Union1 = {
//   name: "",
// };

// =====================================

/**
 * 2. 교집합 타입 (Intersection Type)
 * - 프로퍼티의 교집합이 아닌, 값의 교집합
 * - A와 B 타입의 모든 조건을 동시에 충족해야 함
 * - >> 두 타입의 모든 프로퍼티를 포함하는 타입을 생성
 */

// 원시 타입의 교집합은 공존할 수 없다.
// 어떤 값도 동시에 number 이면서 string일 수 없기 때문
let variable: number & string; // = never

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

// 공통된 프로퍼티 없어도 모든 프로퍼티를 합쳐서 타입  생성
type Dog1 = {
  name: "";
};
type Person1 = {
  age: "";
};
type Intersection1 = Dog1 & Person1;
let intersectionVar: Intersection1 = {
  name: "",
  age: "",
};
