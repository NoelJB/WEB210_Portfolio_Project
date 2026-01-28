import express from "express";
import cors from "cors";

import { message, MyResume } from "./data.js";

const app = express();
const port = 3000;

// Setup CORS
app.use(cors({"exposedHeaders": ["Location"]}))

// Routing for our app page
app.get("/", (req, res) => { res.send(`<HTML><HEAD><TITLE>Portfolio Home Page</TITLE></HEAD><BODY><p>${message}</p></BODY></HTML>`); });
app.get("/api/resume", (req, res) => { res.json(MyResume()); });

// Catch-All for URLs that we didn't recognize!
app.use((req, res, next) => {
    res.status(404).send('Sorry, the URL you requested was not found.');
});

app.listen(port, () => console.log(`JCCC Portfolio Server started on port ${port}`));
