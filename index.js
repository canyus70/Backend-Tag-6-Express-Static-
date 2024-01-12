// Importiere das Express-Framework 
const express = require("express");

// Erstelle eine Express-Anwendung
const app = express();

// Middleware für das Logging von eingehenden Requests
app.use((req,_, next) =>{
    console.log("New Request", req.method, req.url);
    next();
} )

// Middleware für den Zugriff auf statische Ressourcen im "public"-Verzeichnis
app.use(express.static("public"));

// Route für die Homepage
app.get("/", (_, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
})

// Route für die Aboutpage
app.get("/about", (_, res) => {
    res.sendFile(__dirname + "/public/pages/about.html");
})

// Route für die Workpage
app.get("/work", (_, res) => {
    res.sendFile(__dirname + "/public/pages/work.html");
})

// Route für die Galleriepage
app.get("/gallerie", (_, res) => {
    res.sendFile(__dirname + "/public/pages/gallerie.html");
})


// Fallback-Route für alle anderen Anfragen
app.use((_, res) => {
    res.sendFile(__dirname + "/public/pages/error.html");
});

// Starte den Server auf dem angegebenen Port
const PORT = 7070;
app.listen(PORT, () => console.log("Server listening at port", PORT));