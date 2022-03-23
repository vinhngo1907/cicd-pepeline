const express = require("express");
const app = express();

app.get("/",function(req,res){
	res.send("<h1>Hello CodersX Tokyo</h1>");
})

const port =  3000;
app.listen(port,function(){
	console.log("Server started at "+port);
})