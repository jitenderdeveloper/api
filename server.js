const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

server.listen(PORT, console.log(PORT,'server started..'))



// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "./server.js",
//             "use": "@vercel/node"
//         }
//     ],
//     "routes": [
//         {
//             "src": "/.*",
//             "dest": "server.js"
//         }
//     ]
// }