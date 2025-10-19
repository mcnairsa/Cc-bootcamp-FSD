# Express Routes Controllers Demo

An Express.js application demonstrating MVC architecture with separate routes and controllers for user management.

## Important: Port Conflict

**Before starting this demo, shut down any other servers running on port 3000.**

1. stop other terminal sessions that might be running Express servers.


2. If step 1 doesn't work, check for running processes:
```bash
npx kill-port 3000
```



## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## Project Structure

```
express-routes-controllers-demo/
├── index.js                 # Main server file
├── routes/
│   └── users.js             # User routes (Express Router)
└── controllers/
    └── usersController.js   # User business logic
```

## API Endpoints

All user endpoints are prefixed with `/users`:

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID

## Testing with Postman

1. Import the Postman collection from `../Express-Routing-Demo.postman_collection.json`
2. Make sure the server is running (`npm run dev`)
3. Test the endpoints in this order:
   - Get All Users (returns Alice and Bob)
   - Create User (add new user)
   - Get User by ID (test with IDs 1, 2, 3)
   - Update User (modify existing user)
   - Delete User (remove a user)
   - Error Testing (test with non-existent ID 999)

## Sample Request Bodies

Create User (POST /users):
```json
{
  "name": "Charlie Wilson",
  "email": "charlie@example.com"
}
```

Update User (PUT /users/:id):
```json
{
  "name": "Alice Johnson Updated",
  "email": "alice.updated@example.com"
}
```

## Key Concepts Demonstrated

- **MVC Architecture**: Separation of routes (`routes/users.js`) and business logic (`controllers/usersController.js`)
- **Express Router**: Modular route organization
- **Controller Methods**: Each route connects to a specific controller function
- **RESTful API Design**: Standard HTTP methods for CRUD operations
- **Route Parameters**: Dynamic `:id` parameters for specific resources

## Notes

- Data is stored in-memory and resets when server restarts
- User IDs are auto-incremented starting from 1
- All responses are in JSON format
- Routes are prefixed with `/users` (different from simple demo)