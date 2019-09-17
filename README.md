# Client(React) + Server(Express/nodejs)


## Terminal

`npm init --yes` create package.json with answers yes to all

`npm i express` install express for backend

`npm i nodemon -g` install nodemon globally for live watch

`nodemon app.js` run app.js with node in live watch mode

`npm install --save concurrently` installing concurrently to run both


## Postman
http://localhost:3000

## client

`npx create-react-app client` creating react app client


## package.json

`"client": "npm run start --prefix client"` to run react app within client folder

`"backend": "nodemon app.js"` to run express server 

`"both": "concurrently \"npm run server\" \"npm run client\""` to run both--client and server backslashes to escape the double quotes


## .gitignore

`node_modules/`  either  `node_modules`

`.DS_Store`