const express = require("express");

const app = express();

app.set("view engine", "ejs"); // для отображени html
app.use(express.static("public"));
// const myScript = require("./public/js/app");

app.get("/", (req, resp) => {
  resp.render("index");
  // resp.setHeader("Content-Type", "text/javascript");
  // const result = myScript.someFunction();
  // console.log(result);
});

app.get("/about", (req, resp) => {
  resp.render("about", {
    username: "nurdin",
    sport: "foobal",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});
