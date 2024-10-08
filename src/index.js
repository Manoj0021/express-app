const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Express app listening at port ${PORT}`);
});
