'use stric';

// 자바스크립트는 기본적으로 동기프로그래밍
// Excute the code block in order after hoisting.
// hoisting : var, function declaration
console.log(1);
// 콜백함수(callback) : 나중에 함수를 호출
setTimeout(() => console.log('2'), 1000);
console.log(3);

// 동기 콜백
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// 콜백 헬 예시
class UserStorage {
  loginUser(id, password, onSuceess, onError) {
    setTimeout(() => {
      if (
        (id === 'jiwoong' && password === 'oh') ||
        (id === 'corder' && password === 'academy')
      ) {
        onSuceess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jiwoong') {
        onSuccess({ name: 'jiwoong', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWijiwoonthRole) => {
        alert(
          `Heelo ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
