const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const logger2 = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger2);
// toggleUserState(users, 'Lux', logger2);

const promiseFn = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,);
    return new Promise((resolve, reject) => {
      resolve(updatedUsers);
    })
}

/*
 * Должно работать так
 */
// toggleUserState(users, 'Mango').then(logger2);
// toggleUserState(users, 'Lux').then(logger2);

promiseFn(users, 'Mango').then(logger2);
promiseFn(users, 'Lux').then(logger2);