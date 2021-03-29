// 1. Use strict
// ES5에서 추가된 문법
// * 특징
// 1. 기존에는 조용히 무시되던 에러들을 throwing합니다.
// 2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다.
//    가끔씩 strict 모드의 코드는 non-strict 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
// 3. strict 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.
'use strict';

// 2. Variable / read, write
// let (ES6 추가)
let globalName = 'global name';
{
  let name2 = 'jiwoong';
  console.log(name2); // jiwoong
  name2 = 'hello';
  console.log(name2); // hello
}
//console.log(name2); // Uncaught ReferenceError: name2 is not defined
console.log(globalName); // global name

// var (ES6 전에 변수 할당 / 더이상 사용하지 말아야 함.)

// 1) var hoisting (변수 선언을 어디서 했는지 상관없이 선언부를 제일 위로 끌어올림)
console.log(age); // undefined
age = 4;
console.log(age); // 4
var age;

// 2) 블록 스코프를 가지지 않음 - 블록안에 선언된 변수도 밖에서 접근 가능.
// 3) IE에는 let을 지원하지 않음. 보통 무시하지만, IE까지 고려하려면 BABEL
//    을 사용하여 ES5로 배포
{
  age2 = 20;
  var age2;
}

console.log(age2); // 20

// 3. Contant / read only
// 몇가지 이유로 불변의 데이터 타입을 항상 사용하는 것이 좋음.
// - 보안
// - 쓰레드 안전성
// - 개발자의 실수 감소
// 더 이상 변경되지 않을 변수는 const를 사용
const days_InWeek = 7;
const maxNumber = 5;

// 4. 변수 타입
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class funcion
// first-class funcion => 일급함수 - 함수를 다른 변수와 동일하게 다루는 언어는 일급 함수를 가졌다고 표현
// 일급함수는 변수에 함수를 할당하거나 함수를 인자로 전달할 수 있음.

// 1) 숫자타입 : number
const count = 16; // integer
let size = 12.3; // decimal number
console.log(`value : ${count}, type : ${typeof count}`); // value : 16, type : number
console.log(`value : ${size}, type : ${typeof size}`); // value : 12.3, type : number

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (새로운 타입 추가 / 현재는 크롬, 파이어폭스만 지원)
// 뒤에 숫자 뒤에 n을 붙여서 이 숫자는 bigint라고 명시
const number = 1234567890123456789012345678901234567;
const bigInt = 1234567890123456789012345678901234567n;
console.log(`value : ${number}, type : ${typeof number}`); // value : 1.2345678901234568e+36, type : number
console.log(`value : ${bigInt}, type : ${typeof bigInt}`); // value : 1234567890123456789012345678901234567, type : bigint
// 안전한 최대 정수값 (알고리즘에서 가장 작은수를 찾을 때 변수 초기화에 사용)
const maxSafeInt = Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const myName = 'jiwoong';
const greeting = 'hello ' + myName;
console.log(`value : ${greeting}, type : ${typeof greeting}`); // value : hello jiwoong, type : string
const helloBob = `hi ${myName}`;
// template literals (string) => `${}`
console.log(`value : ${helloBob}, type : ${typeof helloBob}`); // value : hi jiwoong, type : string
// unused template literals
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // value: hi jiwoong type: string

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

// null , type : object
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined , type : undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
// 같은 문자열도 고유한 식별자 값을 가짐.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false

// 문자열이 같은 동일한 심볼을 만들려면 for 함수 사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true

// symbol 값 출력 - symbol.description
console.log(
  `value : ${symbol1.description}, type : ${typeof symbol1.description}` // value : id, type : string
);

// object, real-life object, data structure
const jiwoong = { name: 'jiwoong', age: '26' };
jiwoong.age = 28;
console.log(jiwoong); // {name: "jiwoong", age: 28}

// 5. Dynamic typing : dynamically typed language
// 자바스크립트는 런타임 시에 타입이 결정
// 이러한 문제점을 해결하기 위해 TypeScript 를 사용해야 함.
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`); // value : hello, type : string
text = 1;
console.log(`value : ${text}, type : ${typeof text}`); // value : 1, type : number
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`); // value : 75, type : string
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // value : 4, type : number
