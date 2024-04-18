const http = require("node:http");
const data = require("./data.js");

const user = data.user();

const userName = user.name;
const userSist = user.sist;
const userClas = user.clas();


const content = `
    <h1> Bienvenido ${userName} !! </h1>
    <h2> Vemos que estas usando ${userSist}... </h2>
    <h2> La comunidad de backend opina que eres ... ${userClas}</h2>
`;
//me parece recogidito, seguramente lo use bastante asi
const baseDOM = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
        </head>
        <body>
            ${content}
        </body>
    </html>
`;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write(baseDOM, "utf-8");
    res.end();
})

server.listen(0,()=>{
    console.log(`Server running on http://localhost:${server.address().port}`)
})

//  Muy clave: https://stackoverflow.com/questions/19339069/how-to-encode-http-response-body-as-utf-8-in-node-js