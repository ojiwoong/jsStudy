'use stric';

// Array

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. 인덱스 위치
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined
// 배열의 마지막 접근
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. 배열의 반복
// 과일 배열의 모든 값 출력
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. foreach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index);
});

// arrow .ver
fruits.forEach((fruit, index, array) => console.log(fruit, index));

// 4. 추가, 삭제, 복사
// push : 맨 끝 데이터 추가
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop : 맨 끝 데이터 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : 맨 앞 데이터 추가
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift : 맨 앞 데이터 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// 중요! shift, unshift 는 pop, push 에 비해 느림
// 맨 끝의 데이터를 추가, 삭제 시에 다른 데이터들의 이동이 필요없지만,
// 맨 앞의 데이터를 추가, 삭제 시에 다른 데이터들의 이동이 필요함.
// pop, push 사용 추천 !

// splice : 지정한 인덱스의 데이터 삭제
let new_count = fruits.push('딸기', '복숭아', '레몬');
console.log(`push 후 리턴받은 배열의 길이 : ${new_count}`);
console.log(fruits);
// 삭제개수를 지정하지 않으면 지정인덱스 포함 이후 데이터 모두 삭제
//fruits.splice(1);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '풋사과', '수박');
console.log(fruits);

// 두 개의 배열 합치기
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : 인덱스 찾기
//console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('수박2')); // 데이터 없을 시 -1 반환
// includes : 포함여부 체크
console.log(fruits.includes('사과'));
console.log(fruits.includes('사과'));

// lastIndexOf
//console.clear();
fruits.push('사과');
console.log(fruits); // 사과, 풋사과, 수박, 복숭아, 레몬, 사과
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.lastIndexOf('사과')); // 5
