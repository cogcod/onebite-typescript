// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "yura"];
let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열 요소의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// = 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

/**
 * js로 컴파일하면 일반 배열이기 때문에 배열 메서드 사용 가능
 * 이 때 push, pop을 사용해도 에러가 나지 않는 것은
 * 길이에 제한을 두지 않기 때문이다.
 */
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ["이아무개", 1],
  ["김수민", 2],
  ["박나래", 3],
  ["김아라", 4],
];
