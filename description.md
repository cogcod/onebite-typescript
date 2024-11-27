# 한입 크기로 잘라먹는 TypeScript

> 참고 : https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

## Section 01. 컴파일러 옵션 설정하기

1. 초기화 및 설치
   - npm init
   - npm i @types/node : node 내장 기능들의 타입 정보 패키지(ex_console)
   - npm i -g typescript : 타입스크립트 컴파일러(tsc) 설치
2. ts -> js 컴파일
   - tsc src/index.ts : 컴파일된 index.js파일 생성
   - node src/index.js : index.js 파일 실행
3. 컴파일과 실행을 동시에
   - npm i -g tsx
   - tsx src/index.ts : 바로 node로 실행
