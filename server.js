require("dotenv").config();
const express = require("express");
const app = express();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const projectController = require("./controller/project_controller");

app.use("/project", projectController);

app.listen(process.env.PORT, console.log('Server is running on port ' + process.env.PORT));
