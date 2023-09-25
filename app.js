const users = [
  {
    userName: "admin",
    password: "pass123",
  },
  {
    userName: "user1",
    password: "pass1234",
  },
];

const register = (userName, password, confirmPassword) => {
  const user = users.find((user) => user.userName == userName);
  if (user === undefined) {
    if (password === confirmPassword) {
      const newUser = { userName, password };
      users.push(newUser);
      console.log(users);
    } else {
      console.log(`Password didn't match`);
    }
  } else {
    console.log(`User already exists`);
  }
};

const login = (userName, password) => {
  const user = users.find((user) => user.userName == userName);
  if (user !== undefined) {
    if (password !== user.password) {
      console.log(`Wrong credentials`);
    } else {
      console.log(`Logged in`);
    }
  } else {
    console.log(`Wrong credentials`);
  }
};

register("admin2", "easypass", "easypass");
register("jai", "pass_jai", "pass_jai");
register("mark_ian", "pass_ian", "pass_ian");

login("jai", "pass_jai");
login("mark_ian", "pass123");
