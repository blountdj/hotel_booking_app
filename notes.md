-- BACKEND SETUP --
DEPENDENCIES
npm i express cors dotenv mongodb mongoose
npm i bcrypt jsonwebtoken
npm i express-validator
npm i cookie-parser
npm i cloudinary
npm i multer 

multer - for multi-part forms (containing images)

Create tsconfig.json = npx tsc --init


DEV DEPENDENCIES
npm i @types/cors @types/express @types/node ts-node typescript nodemon --save-dev
npm i @types/bcrypt @types/jsonwebtoken --save-dev
npm i --save-dev @types/cookie-parser
npm i --save-dev @types/multer
npm i --save-dev @types/react-datepicker

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
npm i react-icons
npm i react-datepicker

npx tailwindcss init -p


TESTING BACKEND
npm i cross-env


e2e-tests folder
npm init playwright@latest
npm i typescript --save-dev
npx tsc --init
add playwright extension - Playwright Test for VSCode

HOSTING
App is hosted on render.com

IMAGES
Images are stored on Cloudinary