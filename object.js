'use strict';
// Object (객체)
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jiwoong = { name: 'jiwoong', age: 28 };
print(jiwoong);

// with JavaScript magic (dynamically typed language)
// can add properties later (not recommended)
jiwoong.hasJob = true;
console.log(jiwoong.hasJob); // true

// can delete properties later (not recommended)
delete jiwoong.hasJob;
console.log(jiwoong.hasJob); // undefined

// 2. Computed properties
// 키는 항상 문자열로 지정
console.log(jiwoong.name); // jiwoong
console.log(jiwoong['name']); // jiwoong
jiwoong['hasJob'] = true;
console.log(jiwoong.hasJob); // true

function printValue(obj, key) {
  // Computed properties 를 사용하는 예시
  // 동적으로 키의 값을 가져와야 할 때 사용
  // console.log(obj.key);
  console.log(obj[key]);
}

printValue(jiwoong, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 22 };
const person2 = { name: 'steve', age: 27 };
const person3 = { name: 'dave', age: 26 };
const person4 = new Person('jiwoong', 28);
console.log(person4);

// 4. Constructor function
// ES6 이전 class가 없던 시절에 주로 템플릿을 생성 방식
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this
}

// 5. in operator : 프로퍼티 존재여부 체크 (key in obj);
console.log('name' in jiwoong); // true
console.log('age' in jiwoong); // true
console.log('tall' in jiwoong); // false
console.log(jiwoong.tall); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in jiwoong) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
// 기본 for 문
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for...of 문
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jiwoong', age: '28' };
// 주소 참조
const user2 = user;
user2.name = 'coder';
console.log(user);

// 객체 복사
// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}

console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 뒤에 오는 object 인자로 값이 덮어쓰여짐
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big

function Person() {}
Person.prototype.getType = () => '인간';

let jiwoong2 = new Person();

console.log(jiwoong2);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getType() {
    console.log('인간');
  }

  getType2 = () => {
    console.log('인간');
  };
}

Person2.prototype.age2 = 'bb';

let jj = new Person2('jiwoong', 28);
console.log(jj);
