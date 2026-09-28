import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Ready");
})

app.listen(3001, () => {
    console.log("Server running !");
})