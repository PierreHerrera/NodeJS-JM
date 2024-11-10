import { createServer } from "http";

const server = createServer((req, res) => {
    // res.writeHead(200, { "Content-type": "text/plain" });
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    // res.end("¡Hola mundo!");
    res.end("<h1>¡Hola mundo!</h1>");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web en ejecucion en http://127.0.0.1:3000");
});