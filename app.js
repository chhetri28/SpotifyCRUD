const express=require("express");
const app=express();
const port=3001;
app.set("view engine","hbs");
app.set("views","./views");
app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/addS",(req,res)=>{
    res.render("addS");
});

app.listen(port,(err)=>{
    if(err) throw err;
    else console.log("server is running at the port %d",port);
});