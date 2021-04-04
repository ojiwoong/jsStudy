// 콜백 지옥 예시
// class UserStorage {
//     loginUser(id, password, onSuceess, onError) {
//       setTimeout(() => {
//         if (
//           (id === 'jiwoong' && password === 'oh') ||
//           (id === 'corder' && password === 'academy')
//         ) {
//           onSuceess(id);
//         } else {
//           onError(new Error('not found'));
//         }
//       }, 2000);
//     }

//     getRoles(user, onSuccess, onError) {
//       setTimeout(() => {
//         if (user === 'jiwoong') {
//           onSuccess({ name: 'jiwoong', role: 'admin' });
//         } else {
//           onError(new Error('no access'));
//         }
//       });
//     }
//   }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWijiwoonthRole) => {
//         alert(
//           `Heelo ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => console.log(error)
//     );
//   },
//   (error) => console.log(error)
// );

// 콜백 지옥 => Promise 로 변경
class UserStorage {
  LoginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'jiwoong' && password === 'oh') ||
          (id === 'corder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'jiwoong') {
          resolve({ name: 'jiwoong', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .LoginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
