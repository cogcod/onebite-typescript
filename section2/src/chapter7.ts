// void(= 공허, 아무것도 없음을 의미하는 타입)

function func1(): string {
  return "hello"; // string을 리턴
}

function func2(): void {
  console.log("hello"); // 그냥 출력문
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined; // 오직 undefined만 담을 수 있다

// undefined와 null을 타입으로 명시하면 실제로 undefined와 null을 직접 return 해주어야 한다.
// return문이 필요없는 함수에는 void를 사용하자.

// never(= 존재하지 않는, 불가능한 타입)
// 함수가 종료될 수 없어서 이 함수에 반환값 자체가 있는게 모순이다! 할 때 사용

function func3(): never {
  while (true) {} // 무한 루프
}

function func4(): never {
  throw new Error(); // 실행 시 프로그램 종료
}

// 변수에 never 타입을 사용할 순 있지만, 아무런 값도 담을 수 없다.
let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
