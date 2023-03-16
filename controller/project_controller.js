const express = require("express");

const project = express.Router();

const Project= require("../models/project")

project.get("/", (req, res) => {
  res.render('index',
    {
      project: Project
    }
  );
});

project.get('/:arrayIndex', (req, res)=>{
  res.send(Project[req.params.arrayIndex])
})

module.exports = project;
