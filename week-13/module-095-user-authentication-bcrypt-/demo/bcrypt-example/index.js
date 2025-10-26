// Install bcrypt for password hashing

const bcrypt = require("bcrypt");

// salt
const SALT_ROUNDS = 10;

async function demonstrateHashing() {
  const password = "mypassword123";

  // has this password

  const hash1 = await bcrypt.hash(password, SALT_ROUNDS);

  console.log("hash1", hash1);
}

demonstrateHashing();