// Object spread
const baseUser = { name: "Alex", age: 25 };
const permissions = { canEdit: true, canDelete: false };
const preferences = { theme: "light", language: "es" };

const completeUser = {
  ...baseUser,
  ...permissions,
  ...preferences,
  //   lastLogin: new Date(),
};

console.log(completeUser);
