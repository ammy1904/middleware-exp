# Experiment 6 - Middleware Implementation

## Aim
To implement logging and authentication middleware in Express.js.

## Learning Outcomes
- Understand middleware in Express
- Implement logging middleware
- Implement authentication middleware
- Handle errors using middleware

## Technologies
- Node.js
- Express.js
- Postman

## Run Steps
npm install  
node app.js  

Server runs on: http://localhost:3000

## API Routes
GET /api/public → Public access  

GET /api/protected → Requires header:  
Authorization: validtoken  

## Output
- Logs requests in console  
- Protected route works with token  
- Unauthorized access returns 401  
- Middleware runs in proper sequence