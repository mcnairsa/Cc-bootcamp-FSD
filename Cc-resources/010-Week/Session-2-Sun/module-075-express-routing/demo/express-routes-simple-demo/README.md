# Express Routes Simple Demo

A basic Express.js application demonstrating CRUD operations with in-memory user data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID

## Testing with Postman

1. Import the Postman collection from `../Express-Routing-Demo.postman_collection.json`
2. Start the server (`npm start`)
3. Run the requests in this order:
   - Get All Users (shows initial Alice and Bob)
   - Create User (adds Jacob)
   - Get User by ID (test with IDs 1, 2, 3)
   - Update User (modify existing user)
   - Delete User (remove a user)
   - Error Testing (test with non-existent ID 999)

## Sample Request Body

Create User (POST /users):
```json
{
  "name": "Jacob",
  "email": "jacob@example.com"
}
```

Update User (PUT /users/:id):
```json
{
  "name": "Alice Updated",
  "email": "alice.updated@example.com"
}
```

## Notes

- Data is stored in-memory and resets when server restarts
- User IDs are auto-incremented starting from 1
- All responses are in JSON format