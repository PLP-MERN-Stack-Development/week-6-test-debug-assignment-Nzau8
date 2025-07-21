# MERN Real-Time Chat App

## Architecture Overview
A full-stack real-time chat application using the MERN stack (MongoDB, Express, React, Node.js) with JWT authentication and Socket.io for real-time messaging. Includes unit, integration, and E2E tests.

## Tech Stack
- **Frontend:** React, React Router, Axios, Socket.io-client
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.io
- **Authentication:** JWT
- **Testing:** Jest, @testing-library/react, Cypress, Supertest, mongodb-memory-server

## How to Run

### 1. Clone the repository
```
git clone <repo-url>
cd week-6-test-debug-assignment-Nzau8
```

### 2. Setup Server
```
cd server
npm install
cp .env.example .env # or create .env as below
npm start
```

#### Example server/.env
```
MONGO_URI=mongodb://localhost:27017/mern-chat
JWT_SECRET=supersecretkey
PORT=5000
```

### 3. Setup Client
```
cd ../client
npm install
cp .env.example .env # or create .env as below
npm start
```

#### Example client/.env
```
REACT_APP_API_URL=http://localhost:5000
```

## How to Run Tests

### Frontend
- **Unit/Integration:**
  ```
  npm test
  ```
- **E2E:**
  ```
  npx cypress open
  ```

### Backend
- **Unit/Integration:**
  ```
  npm test
  ```
  (Uses in-memory MongoDB)

## Folder Structure
```
client/
  src/
    components/
      Navbar.jsx
      ChatWindow.jsx
      MessageInput.jsx
    pages/
      Login.jsx
      Register.jsx
      ChatRoom.jsx
    services/
      api.js
    socket/
      socket.js
    tests/
      unit/
        MessageInput.test.jsx
      integration/
        LoginFlow.test.jsx
    App.jsx
    index.js
    index.css
  cypress/
    e2e/
      chat-flow.cy.js
  .env
  package.json

server/
  models/
    User.js
    Message.js
  routes/
    auth.js
    messages.js
  controllers/
    authController.js
    messageController.js
  middleware/
    authMiddleware.js
  socket/
    socket.js
  config/
    db.js
  tests/
    unit/
      authController.test.js
    integration/
      authRoutes.test.js
  .env
  package.json
  server.js
  jest.config.js

README.md
```

## Features
- User registration and login (JWT)
- Real-time chat with Socket.io
- Join chat room and send/receive messages instantly
- Typing indicator
- Protected message routes
- Unit, integration, and E2E tests
- Simple, responsive UI 