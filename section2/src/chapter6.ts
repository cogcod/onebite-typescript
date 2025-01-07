// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 단점 : 타입 검사를 다 통과한 다음에 런타임에 오류를 낸다.
// 사실상 타입 검사를 안하는 것과 같으며, 그것은 타입스크립트가 가진 이점을 포기한다는 것.
// 최대한 사용하지 말자!!!!

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar; // 모든 타입의 값에 집어넣을 수도 있다

// unknown
let unknownVar: unknown;

unknownVar = true;
unknownVar = {};
unknownVar = () => {};

// num = unknownVar; ==> any처럼 사용 불가
// 아무 변수에나 넣을 수 없기 때문에 any보다 나음
// typeof로 정제해서 사용해야 함 = "타입 정제"
if (typeof unknownVar === "number") {
  num = unknownVar;
}
