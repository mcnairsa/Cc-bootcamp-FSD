## Example of Using MongoDb Driver to connect in Node

```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function run() {
  await client.connect();
  const database = client.db('myapp');
  const users = database.collection('users');

  // Insert a user
  await users.insertOne({ name: 'Alice', age: 28 });
}

run();
```