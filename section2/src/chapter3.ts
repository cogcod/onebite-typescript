// object
// 객체 리터럴 타입
let user: {
  id?: number; // optional property
  name: string;
} = {
  id: 1,
  name: "yricog",
};

user.id;
/**
 * 타입을 object로 지정하면 안에 아무것도 없게 되는 것!
 * 그래서 user.id 와 같이 속성을 지정하면 없는 속성이라 나온다.
 */

/**
 * 위와 같이 구조를 기준으로 타입을 정의하는 것을
 * '구조적 타입 시스템(Property Based Type System)'이라 한다.
 */

user = { name: "홍길동" };

let config: {
  readonly apiKey: string; // readonly
} = {
  apiKey: "API KEY",
};

// config.apiKey = "hacked"; 변경 불가능!
