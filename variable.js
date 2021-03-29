// 1. Use strict
// ES5에서 추가된 문법
// * 특징
// 1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
// 2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다.
//    가끔씩 strict 모드의 코드는 non-strict 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
// 3. strict 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.
'use strict';

// 2. 변수
// let (ES6 추가)

let name = 'jiwoong';
console.log(name);
name = 'hello';
console.log(name);
