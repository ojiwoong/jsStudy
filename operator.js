// 1. 문자열 합치기
console.log('my' + ' cat');
console.log('1', 2);
console.log(`string literals : 
....
1 + 2 = ${1 + 2}`);

// 2. 숫자 연산자

console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 제곱근

// 3. 증가 및 감소 연산자
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`preDecrement : ${postDecrement}, counter : ${counter}`);

// 4. 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 논리 연산자 : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 멈춤 , or 연산자는 하나라도 true면 true
// 성능상 헤비한 기능일수록 뒤로 보내서 마지막에 호출되도록 하는것이 Best
console.log(`or : ${value1 || value2 || check()}`);

// && (and), 처음으로 false가 나오면 멈춤 , or 연산자는 하나라도 true면 true
// 성능상 헤비한 기능일수록 뒤로 보내서 마지막에 호출되도록 하는것이 Best
console.log(`and : ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('test');
  }

  return true;
}

// 7. 동등 연산자
const stringFive = '5';
const numberFive = 5;

// == 느슨한 동등 연산자, 타입까지 체크 x
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// === 엄격한 동등 연산자, 타입까지 체크 o (recommend)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// 참조에 의한 객체 동등 연산자
const human1 = { name: 'jiwoong' };
const human2 = { name: 'jiwoong' };
const human3 = human1;
console.log(human1 == human2); // false
console.log(human1 === human2); // false
console.log(human1 === human3); // true

console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. 조건 연산자 : if
// if, else if/ else

const name = 'jiwoong';
if (name === 'jiwoong') {
  console.log('Welcom, jiwoong!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. 삼항 연산자
// 조건 ? 값1(true) : 값2(false)
// 간단한 로직일 경우에만 사용
console.log(name === 'jiwoong' ? 'yes' : 'no');

// 10. Switch statment
// use for multiple if checks
// use enum-like value check
// use multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('bad');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('best');
    break;
  default:
    console.log('good');
    break;
}

// 11. Loops
// while loop, 조건 체크 후 블럭 실행
let i = 3;
while (i > 0) {
  console.log(`while : ${i}`);
  i--;
}

// do while loop, 블럭을 먼저 실행 후 조건 체크
do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

// 기존 변수 사용 외에 for 안에 지역변수 선언도 가능
for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for : ${i}`);
}

// 중첩 반복문
// big-O notation O(n^2) 로 시간 복잡도 효율상 좋지 않아 되도록 피하는게 좋음.
//시간 복잡도(알고리즘의 복잡도)를 비교
//O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i}, j: ${j}`);
  }
}

// break, continue
// 퀴즈1. 0~10까지 반복하고, 짝수만 출력 (continue 구문 사용)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1 : ${i}`);
}

// 퀴즈2. 0~10까지 반복하고, 값이 8보다 크면 멈춤 (break 구문 사용)
for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2 : ${i}`);
}

// label 구문
// 반복문에 레이블을 붙이고, break나 continue 구문을 사용해 반복문의 어느 위치에서
// 작업을 멈추고 어느 위치에서 다시 수행할지 표시
loop1: for (let i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (let j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log('i = ' + i + ', j = ' + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
