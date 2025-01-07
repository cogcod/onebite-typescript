// enum(열거형) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 값을 지정하지 않으면 자동으로 0부터 숫자가 값으로 부여된다.
// enum은 type과 다르게 컴파일 시 사라지지 않는다.

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김이박",
  role: Role.ADMIN, //0
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, //1
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, //2
};
