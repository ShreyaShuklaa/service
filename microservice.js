var express = require('express');
var app = express();

var serviceController = function(req,res){
	
	var service = [
	{empid:1,ename:"Shreya",eproject:"angular",deployedstatus:"Succesfull"},
	{empid:2,ename:"Anagha",eproject:"angular",deployedstatus:"Not Yet"},
	{empid:3,ename:"Soumya",eproject:"angular",deployedstatus:"Inprogress"}
	];
	res.send(service);
};

app.get('/service',serviceController);

var server = app.listen(8087,function(){
	
	var host = server.address().address
	var port = server.address().port
	console.log("listening")
})