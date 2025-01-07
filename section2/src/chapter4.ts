// 타입 별칭 (type alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "jenna",
  nickname: "jj",
  birth: "1999.01.08",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
// key, value의 타입이 어떠한 규칙을 가짐
// key가 string이면 어떤 걸 추가해도 ok
// 타입을 검사할 객체가 비어져 있어도 ok

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number; // 비어있어도 됨
  Korea: number; // 꼭 필요한 값
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
