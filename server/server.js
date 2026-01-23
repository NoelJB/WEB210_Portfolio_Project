import express from "express";

import { message, MyResume } from "./data.js";

const app = express();
const port = 3000;

// Routing for our app page
app.use("/api/resume", (req, res) => { res.send(MyResume()); });
//app.use("/", (req, res) => { res.send(`<p>${message}</p>`); });

// Catch-All for URLs that we didn't recognize!
app.use((req, res, next) => {
    res.status(404).send('Sorry, the URL you requested was not found.');
});

app.listen(port, () => console.log(`JCCC Portfolio Server started on port ${port}`));
