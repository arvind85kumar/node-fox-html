const express = require("express");
const  app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
const staticPath =  path.join(__dirname,"../public");
const templatePath =  path.join(__dirname,"../templates/views");
const partialPath =  path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/index.html",(req,res)=>{
    res.render("index");
});
app.get("/about.html",(req,res)=>{
    res.render("about");
});
app.get("/courses.html",(req,res)=>{
    res.render("courses");
});

app.get("/blog.html",(req,res)=>{
    res.render("blog");
});

app.get("/contact.html",(req,res)=>{
    res.render("contact");
});

app.get("/teacher.html",(req,res)=>{
    res.render("teacher");
});

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})
