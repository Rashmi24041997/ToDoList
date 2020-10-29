const express = require("express")
const app = express()
const bodyparser = require('body-parser')

app.engine("html", require("ejs").renderFile);
app.set("view engine","ejs");
app.use(express.static("views"));
//app.engine("html", require("ejs").renderFile);
app.use(bodyparser.urlencoded({extended:true}));

var bool = true;
console.log(bool);
var tasks = [];

app.get("/",(req,res) =>{
    res.render("view",{tasks:tasks})
});

app.post('/',(req,res)=>{
    let newtask = req.body.new;
   // console.log('sdf1',newtask, 'newtask')
   //  let newlIst = {id: Date.now(), val: newtask}
    tasks.push(newtask); 
   // console.log("add by post"); 
    res.redirect("/")
    //res.json({tasks});
    //console.log(newtask, 'newtask');
    res.render('view',{"tasks":'tasks'});
    //console.log('sdf2',tasks)
   });
   console.log("addition successful");
    
   app.delete("/remove",(req,res)=>{
    console.log("delete called");
    /*var completeTask = req.body.check;
    console.log(completeTask);*/
    if( req.body.check == "true" ){  
        console.log("if");  
        tasks.splice(tasks.indexOf(completeTask),1);
    }
    console.log(tasks);
    res.redirect("/");
})

app.listen(5000,(err)=>{
    if(!err){
        console.log("Port 5000 connected")

    }
    else
    console.log("Failed"+err);
})

