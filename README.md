# 한 입 크기로 잘라먹는 TypeScript

> 참고 : [한 입 크기로 잘라먹는 타입스크립트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
> / [docs](https://ts.winterlood.com/6c9bf87f-6a8f-4e96-95b4-5e12d9f82165#c8a5f8ebaa7d4692a90e3d743bb21dea)

## 목차

- [Section 01. 타입스크립트 개론](#section-01-타입스크립트-개론)

## Section 01. 타입스크립트 개론

### Hello TS World!

1. 초기화 및 설치
   - `npm init`
   - `npm i @types/node` : node 내장 기능들의 타입 정보 패키지(ex_console)
   - `npm i -g typescript` : 타입스크립트 컴파일러(tsc) 설치
2. ts -> js 컴파일
   - src/index.ts 파일 생성
   - `tsc src/index.ts` : 컴파일된 index.js파일 생성
   - `node src/index.js` : index.js 파일 실행
3. 컴파일과 실행을 동시에
   - `npm i -g tsx`
   - `tsx src/index.ts` : 바로 node로 실행

### 컴파일러 옵션 설정하기

1. 컴파일러 옵션 파일 생성
   - `tsc --init`
2. 컴파일 옵션 설정

   ```
   {
      "compilerOptions": {
         "target": "ESNext",   // js 버전 설정
         "module": "ESNext",   // js 모듈 시스템 설정
         "outDir": "dist",     // 컴파일된 js파일 위치 설정
         "strict": true        // 타입검사 엄격 여부
      },
      "include": [
         "src"                 // 컴파일할 파일의 범위와 위치 설정
      ]
   }

   ```
