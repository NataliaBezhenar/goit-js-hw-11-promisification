const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const logger = (updatedUsers) => console.table(updatedUsers);

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return new Promise((resolve, reject) => {
    resolve(updatedUsers);
  });
};

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
