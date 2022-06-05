const express = require("express");
const app = express();

app.get("/status", (req, res) => {
    res.status(200);
    res.send("The server is alive!")
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));

// Need to use "npm start" for just node app.js
// need to use "npm run dev" for nodemon app.js