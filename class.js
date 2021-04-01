'use strict';
// 객체지향 프로그래밍
// class(클래스) : template(틀)
// object(객체) : instance of a class
// JavaScript classes
// - ES6에서 추가
// - 프로토타입 베이스 기반, syntactical sugar
// syntactic sugar는 한국어로 직역을 하자면 '문법적 설탕'이 되겠죠?
// 이 문법적 설탕(syntactic sugar)라는 것이 의미하는 것은 문법적
// 기능은 그대로인데 그것을 읽는 사람이 직관적으로 쉽게 코드를 읽을 수 있게 만든다는 것입니다.
// syntactic sugar 예시) arrow function, class

// 1. Class declarations
class Person {
  // 생성자
  constructor(name, age) {
    // fields - property
    this.name = name;
    this.age = age;
  }

  // fields - method
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const jiwoong = new Person('jiwoong', 28);
console.log(jiwoong.name);
console.log(jiwoong.age);

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// 최근 추가됨 (대부분 브라우저에서 지원이 아직 안됨)
// 생성자없이 publicField 사용
// # 기호를 붙이면 privateField 로 class 내부에서만 접근 가능
class Experiment {
  publicField = 2;
  #privateField = 5;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods (정적 프로퍼틴, 메소드)
// 최근 추가됨
class Article {
  static publisher = 'Woong Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance(상속)
// 한 클래스가 다른 클래스를 확장하는 방법
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // super.draw - 부모 메소드 호출 (=parent.draw)
    super.draw();
    console.log('🔺');
  }

  // 오버라이딩(Overriding)
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceof
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); // true
