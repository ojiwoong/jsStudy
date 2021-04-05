'use strict';

// Promise를 좀 더 간편하고 간결하고 동기적으로 실행되는 것처럼 보이게 만듬
// Promise 도 계속 then 체이닝을 하면 코드가 난잡해질 수 있음
// 이 때문에 Promise 위에 사용하여 좀 더 간편한 API로 async & await을 사용하면
// 동기식으로 코드를 작성할 수 있게 해줌
// Syntatic Sugar (문법적 설탕)

// async & await
// clear style of using promise

// 1. async
// 기존 promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve('jiwoong');
  });
}

// promise to async
async function fetchUser2() {
  // do network request in 10 secs...
  return 'jiwoong';
}

const user = fetchUser2();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join('+')
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
