const express = require("express");

const app = express();

app.set("view engine", "ejs"); // для отображени html
app.use(express.static("public"));

app.get("/", (req, resp) => {
  resp.render("index");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});
