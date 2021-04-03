'use strict';
// HTTP (Hypertext Transfer Protocol)
// 브라우저에서 Client와 Server 이 상호간에 통신하기 위한 통신규약
// Client ==request[data]==> Server ==response[data]==> Client

// AJAX (Asynchronous JavaScript And XML) - 비동기 통신 기술
// AJAX 의 등장으로 서버로부터 Json이나 XML 형태로 필요한 데이터만 받아와
// 페이지를 부분적으로 갱신할 수 있게 됌.
// (기존엔 일부분만 바뀌어도 페이지 전체를 로드 - 자원낭비 , 시간낭비)

// 1. XHR (XMLHttpRequest) 2. Fetch (IE 지원 X)
// AJAX는 초기에 XMLHttpRequest API를 이용하는 것이 일반적이었으나, 불편함을
// 느낀사람들이 jQuery를 통해 AJAX를 구현하기 시작, 그 이후로 Fetch API가
// ES2015(ES6) 표준으로 등장하면서 이제는 대부분 Fetch API를 통해 구현

// XML (Extensible Markup Language)
// HTML 와 같은 마크업 언어 태그로 데이터를 구분
// JSON (JavaScript Object Notation) - 주로 많이 쓰이는 추세
// 자바스크립트 객체와 같이 Key, value 한쌍으로 데이터를 구분

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!!!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'name' ? 'jiwoong' : value;
});
console.log(json);

console.log(
  '========================================================================================'
);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);

console.log(obj.birthDate.getDate());
