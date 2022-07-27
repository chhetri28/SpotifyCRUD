const express=require("express");
const app=express();
const port=3001;
const mysql=require("./connection").con;
app.set("view engine","hbs");
app.set("views","./views");
app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/addS",(req,res)=>{
    res.render("addS");
});

/*
app.get("/addsong",(req,res)=>{
    const {sname,dor,aname}=req.query;
    // res.send(req.query);
    let qry="select * from Songs where sname=?";
    mysql.query(qry,[sname],(err,results)=>{
        if(err) throw err;
        else{
            if(results.length > 0){
                res.render("addS", { checkmesg: true });
            }else{
                let qry2="insert into Songs values(?,?,?)";
                mysql.query(qry2,[sname,dor,aname],(err,results)=>{
                    res.render("addS", { mesg: true })
                });
            }
        }
    });
});
*/
app.get("/addsong",(req,res)=>{
    //Fetching data
    // res.send(req.query);
    const {sname,dor,aname}=req.query;
    // const {name,phone,email,gender}=req.query;
    //sanitization XSS....
    let qry="select * from Songs where sname=? ";
    mysql.query(qry,[sname],(err,results)=>{
        if(err) throw err;
        else{
            if(results.length >0){
                res.render("addS", { checkmesg: true });
            }else{
                //insert query
                let qry2 = "insert into Songs values(?,?,?)";
                mysql.query(qry2, [sname,dor,aname], (err, results) => {
                    if (results.affectedRows > 0) {
                        res.render("addS", { mesg: true })
                    }
                });
            }
        }
    });
});


app.listen(port,(err)=>{
    if(err) throw err;
    else console.log("server is running at the port %d",port);
});