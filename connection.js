// Artist can sing multiple songs ---> (1 to many)
// Song can be sung by multiple artists---> (many to 1)
// Users can rate a song (rating between 1 - 5)----> (1 to 1)
const mysql=require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345@Pass",
    database:"spotify",
    port:3306
});
con.connect((err)=>{
    if(err) throw err;
    console.log("Connection is created..!!");
});

module.exports.con=con;