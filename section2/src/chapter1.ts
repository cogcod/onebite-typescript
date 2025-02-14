// 원시 타입
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

/**
 * 다른 타입의 변수에 잠깐 null 값을 넣어야될 때
 * strictNullChecks 옵션을 추가한다.
 */
let numA: number = null;

// 리터럴 타입
let numB: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
