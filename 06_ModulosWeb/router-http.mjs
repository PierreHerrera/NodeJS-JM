import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.end("<h1>Home</h1>");
    } else if (req.url === "/hola") {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.end("<h1>¡Hola 1!</h1>");
    } else if (req.url === "/kenai") {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        res.end("<h1>¡Hola 2!</h1>");
    } else {
        res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
        res.end("<h1>Not Found :(!</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web en ejecucion en http://127.0.0.1:3000");
});