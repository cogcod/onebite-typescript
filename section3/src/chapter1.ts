/**
 * Unknown 타입
 * - 전체 집합, 최상위 슈퍼 타입
 */
function unknownExam() {
  //  모든 타입의 UpCasting O
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // unknown의 DownCasting X
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * - 공집합(=아무것도 없다), 모든 타입의 (최하위)서브 타입
 */
function neverExam() {
  function neverFun(): never {
    while (true) {}
  }

  // never의 UpCasting O
  let num: number = neverFun();
  let str: string = neverFun();
  let bool: boolean = neverFun();

  // 모든 타입의 DownCasting X
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/**
 * void 타입
 * - undefined의 슈퍼타입으로 기억하기
 */
function voidExam() {
  function voidFun(): void {
    console.log("hi");
    return undefined; // 가능!
  }

  // undefined의 UpCasting O
  let voidVar: void = undefined;
}

/**
 * any 타입🙅🏻‍♀️
 * - 타입 계층도를 완벽히 무시하는 치트키 타입!
 * - 모든 타입의 슈퍼타입 또는 최하위 서브타입으로 위치하기도 한다. (never 제외)
 * - 사용 권장 X
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // unknown을 any로 DownCationg O
  anyVar = unknownVar;
  // any를 undefined로 DownCationg O
  undefinedVar = anyVar;
  // never만 DownCationg 불가능!
  //   neverVar = anyVar;
}
