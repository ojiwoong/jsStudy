// Function
// Function 은 프로그램을 구성하는 기본적인 빌딩 블럭
// subprogram 이라고도 불리며, 여러번 재사용 가능
// 한가지의 일이나 특정 값을 계산하는데 사용

// 1. Function declaration(함수 선언)
// function name(param1, param2) {body... return;}
// 하나의 function은 하나의 일만 하도록 구현
// 함수 네이밍은 명령 또는 동사 형태로
// createCardAndPoint 와 같은 함수를 createCard, ctreatePoint 이러한 함수로
// 나눌 수는 있는지 고민하며, 항상 최소한의 단위로 정의하는 것이 좋음
// JavaScript에서 Function은 object type

function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message, typeof message);
  return message;
}

log('Hi');
log(1234);

// 위의 log 함수는 매개변수와 리턴되는 타입이 명시되지 않아, 함수의 정확한 기능을
// 파악하는데 어려움이 있을 수 있음. 이러한 문제점 때문에 TypeScript가 등장하고
// 많이 사용되는 추세

// [TypeScript .ver]
// function log(message: string): string {
//   console.log(message);
//   return message;
// }

// 2. Parameters
// 원시타입인 경우 값이 파라미터로 전달
// 객체타입인 경우 참조되는 주소 값이 파라미터로 전달
function changeName(obj) {
  obj.name = 'corder';
}

const jiwoong = { name: 'jiwoong' };
changeName(jiwoong);
console.log(jiwoong);

// 3. Default parameters (ES6 추가)
// 파라미터에 기본값을 설정해놓고, 함수 호출 시 파라미터 값을 넣지 않으면
// 해당 파라미터 값을 설정된 기본값으로 대입
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (ES6 추가)
// 배열 형태로 파라미터로 전달
function printAll(...args) {
  console.log(args); // ["dream", "coding", "jiwoong"]
  // 기본 for 문
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // for of 문
  for (const arg of args) {
    console.log(arg);
  }

  // 배열의 함수 이용
  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'jiwoong');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있음.
let gloablMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // local variable
  console.log(message);
  console.log(gloablMessage);

  function prtinAnother() {
    console.log(message);
    let childMessage = 'hello';
  }

  //console.log(childMessage + 'dddd'); // Uncaught ReferenceError: childMessage is not defined

  // return undefined; // return 이 없으면 기본적으로 생략
}

printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return , early exit
// bad practice
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// best practice
// 조건이 안맞을 경우 빠르게 return 하고 이후 로직을 실행하는 것이 좋음
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }

  // long upgrade logic...
}

// [early return 과 late return 차이]
// 후자의 early return .ver 이 읽기 쉽고, 명확하다

// @ late return .ver
// public int SomeFunction(bool cond1, string name, int value, AuthInfo perms)
// {
//     int retval = SUCCESS;
//     if (someCondition)
//     {
//         if (name != null && name != "")
//         {
//             if (value != 0)
//             {
//                 if (perms.allow(name)
//                 {
//                     // Do Something
//                 }
//                 else
//                 {
//                     reval = PERM_DENY;
//                 }
//             }
//             else
//             {
//                 retval = BAD_VALUE;
//             }
//         }
//         else
//         {
//             retval = BAD_NAME;
//         }
//     }
//     else
//     {
//         retval = BAD_COND;
//     }
//     return retval;
// }

// @ early return .ver
// public int SomeFunction(bool cond1, string name, int value, AuthInfo perms)
// {
//     if (!someCondition)
//         return BAD_COND;

//     if (name == null || name == "")
//         return BAD_NAME;

//     if (value == 0)
//         return BAD_VALUE;

//     if (!perms.allow(name))
//         return PERM_DENY;

//     // Do something
//     return SUCCESS;
// }

// First-class function (일급 함수)
// 변수에 할당이 가능
// Function의 파라미터로 전달 가능
// Function을 return 할 수도 있음

// 1. Function expression (함수표현식)
// function declaration(함수 선언)은 선언전에 호출할 수 있음 (hoisted)
// function expression(함수 표현식)은 정의하기 전에는 사용할 수 없음
const print = function () {
  // anonymous function (익명함수)
  console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('yes!');
};

const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function (화살표 함수)
// always anonymous (항상 익명)
// # 기존 function expression
const simplePrint = function () {
  console.log('simplePrint!');
};

// # Arrow function을 사용한 function expression
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE : Immediately Invoked Function Expression (즉시 실행 함수 표현)
// 함수 선언과 동시에 즉시 실행해서 확인하고 싶을 때 사용
(function hello() {
  console.log('IIFE');
})();

// quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

// # function declartion
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      return 'Incorrect command';
  }
}
// # fucntion express
const calculate2 = function (command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      return 'Incorrect command';
  }
};
// # function express (arrow function .ver)
const calculate3 = (command, a, b) => {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      return 'Incorrect command';
  }
};

calculate('add', 2, 3);
calculate2('add', 2, 3);
calculate3('add', 2, 3);
