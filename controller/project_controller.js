const express = require("express");

const projects = express.Router();

const Projects= require("../models/projects")

projects.get("/", (req, res) => {
  res.render('index',
    {
      projects: Projects
    }
  );
});

// new project
projects.get('/new', (req, res) => {
  res.render('New')
})

// 404 error
projects.get('*', (req, res) => {
  res.render('ErrorPage')
})


// show project
projects.get('/:arrayIndex', (req, res) => {
  if(Projects[req.params.arrayIndex]){
    res.render('Show', {
      project: Projects[req.params.arrayIndex]
    })
  } else {
    res.send('Not found, go back!')
  }
})


// create post
projects.post('/', (req, res) => {
  console.log(req.body)
  if(!req.body.image) {
    req.body.image = "https://play-lh.googleusercontent.com/lq1QY3o2WDZszdqXfEt8nLODSCI7T9Slb2y4LcFv7fpCQsDawMNYHCi9wIsxH7hxdg0"
  }
  if(req.body.hasDatabase === 'on') {
    req.body.hasDatabase = 'true'
  } else {
    req.body.hasDatabase = 'false'
  }
  Projects.push(req.body)
  res.redirect('/projects')
})

// projects.post('/', (req, res) => {
//   if(req.body.hasDatabase === 'on') {
//     req.body.hasDatabase = true
//   } else {
//     req.body.hasDatabase = false
//   }
//   Projects.push(req.body)
//   res.send(Projects)
// })

module.exports = projects;
