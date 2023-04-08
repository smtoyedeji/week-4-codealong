require("dotenv").config();
const express = require("express");
const app = express();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended: true}))

// styles
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const projectController = require("./controller/project_controller");

app.use("/projects", projectController);

app.get('*', (req, res) => {
  res.render('ErrorPage')
})


app.listen(process.env.PORT, console.log('Server is running on port ' + process.env.PORT));
