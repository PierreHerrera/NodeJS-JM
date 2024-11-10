import express from "express";
import { resolve } from "path";

const app = express();

app.get("/",  (req, res) => {
    res.set({ "Content-type": "text/html; charset=utf-8" });
    res.end("<h1>Hola mundo desde Express.js con el método end</h1>");
    // res.send("<h1>Hola mundo desde Express.js con el metodo send</h1>");
});

app.get("/json",  (req, res) => {
    res.json({
        name: "jon",
        age: 39,
        youtube: "@jonmircha",
    });
});

app.get("/archivo",  (req, res) => {
    res.sendFile(resolve("index.html"));
});

app.get("/plantilla",  (req, res) => {
    //No funciona esta ruta porque hay que especificar el motor de plantillas a express.js
    res.render("plantilla");
});

app.get("/jonmircha",  (req, res) => {
    // res.send("<h1>Bienvenidos a Jon Mircha .com</h1>");
    res.redirect(301, "https://jonmircha.com");
});

app.listen(3000, () => console.log("Iniciando Express desde http://localhost:3000"));