const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank.js");
const app = express();
const path = require("path");
const {postList} = require('./public/views/postList');
const {postDetails} = require('./public/views/postDetails');
const { application } = require("express");

const staticFunction = express.static(path.join(__dirname, "public"))
app.use(morgan('dev'));
app.use(staticFunction)

app.get("*", (req,res,next)=>{
  console.log("I am in the get *")
  next()
})

app.get("/", (req, res, next)=>{
  const posts = postBank.list();
  res.send(postList(posts));
})

app.get("/posts/:id", (req, res, next)=>{
  const id = req.params.id;
  const post = postBank.find(id);
  if(!post.id){
    throw new Error("bruh getaff I ain't got that data for ye")
  }
  res.send(postDetails(post));
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


// express is an API handler express is a library that acts as an API manager, 
// javascript has a built in one called node but it's more complicated and dense
// so we use express because it's extra code that makes all of it easier
// always more of libraries like this (php)
// express does is handle the getmethod and the other methods in a simpler manner and also has built in 
// router functions like react does.
// morgan is a middleware she posts information about what's happening between your api and your console
// they could call morgan startware.
// react Library of modules/functions makes front end website 
// handling easier by using useEffect, useState, router, 
// can't use ifelse statements, for(), while()
// function/objects that pass information without requiring a 
// new get element.
// (initial website one app.getElement  html <div id="app"> )
// only once. react is automatically updating that single get element 
