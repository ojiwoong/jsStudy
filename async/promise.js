'use strict';

// Promise (약속)
// 자바스크립트에서 비동기처리를 간단하게 하는데 도움을 주는 객체 (자바스크립트 내장)
// state process : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('jiwoong');
    //reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then(
    (value) => {
      console.log(value);
    },
    (err) => {
      console.log(`reject : ${err}`);
    }
  )
  .catch((error) => {
    console.log(`catch : ${error}`);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () => new Promise((resolve, reject) => resolve('닭'), 1000);
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// 인자가 하나이고, 그 인자 그대로 바로 함수를 호출할 경우 위와 같이 생략 가능
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
