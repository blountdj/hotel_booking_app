-- BACKEND SETUP --
DEPENDENCIES
npm i express cors dotenv mongodb mongoose
npm i bcrypt jsonwebtoken
npm i express-validator
npm i cookie-parser

DEV DEPENDENCIES
npm i @types/cors @types/express @types/node ts-node typescript nodemon --save-dev
npm i @types/bcrypt @types/jsonwebtoken --save-dev
npm i --save-dev @types/cookie-parser

-- FRONTEND SETUP --
Go to route directory and run:
npm create vite@latest
project name = frontend
framework = react
variant = TypeScript + SWC

DEPENDENCIES
npm i -D tailwindcss postcss autoprefixer
npm i react-router-dom
npm i react-hook-form
npm i react-query

npx tailwindcss init -p