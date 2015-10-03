
//------------------------------------------------------------------
// get the required modules and packages
var http=require('http');
var url=require('url');
var express=require('express');
var bodyParser=require('body-Parser');
var multer=require('multer');
var app=express();
var path=require('path');
var $= require ('jquery');

//-------------------------------------------------------------------
//connect to MySql DB
//var mysql=require('mysql');
//create connection
//var connection=mysql.createConnection({
//	host:'localhost',
//	user:'root',
//	password:'password',
//	database:'clothes',
//	port:3306
//	});
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//create server and go to the requested route
var mystyle;
var myfit;
var mysizes;
var mybrands;
var myfname;

var server=http.createServer(app);
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
//server.listen(8800);
console.log('connection establised');


//router and event handler
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: './uploads/' }));
app.use(express.static('Node'));
app.set('view engine','ejs'); //set the view engine
app.set('views',path.join(__dirname, 'views')); //get all the views from ejs
app.use(express.static(__dirname + '/public'));
//app.use("/styles",express.static(__dirname,'/styles'));
//aphttp.listen(process.env.PORT || 3000, function(){
//  console.log('listening on', http.address().port);
//});p.use("/js",exp
//	ress.static(__dirname, '/js'));
//app.use("/images",express.static(__dirname, '/images'));
// routes definition starts here
//when the browers places a GET request the response will be followed
//******************************************************************
app.get("/",function(req,res){
	res.render('index_dw'); //send the main page to the browser
	});
	
app.get("/LogIn",function(req,res){
	res.render('LogIn'); //send the main page to the browser
	});


app.get("/formstyle",function(req,res){
	res.render('imgform-style'); //send the form 
	//mystylechoice=req.query['ChoiceofStyle'];
	//mystylechoice=req.params.ChoiceofStyle;
	//console.log(mystylechoice);
	}); 

app.post("/formstyle",function(req,res){
	mystyle=req.body.ChoiceofStyle;
	console.log(mystyle);
	res.render('imgform-fit');
	});


app.post("/formfit",function(req,res){
	app.get("LogIn/",function(req,res){
	res.render('indLogIn'); //send the main page to the browser
	});
myf

	it=req.body.ChoiceofFit;
	console.log(myfit);
	res.render('buttonOptions');
	});

app.post("/formsizes",function(req,res){
	mysizes= req.body;
	console.log(mysizes);
	res.render('brands');
});


app.post("/formbrand",function(req,res){
	mybrands=req.body;
	console.log(mybrands);
	res.render('GetStarted');
	});

app.post("/",function(req,res){
	console.log(JSON.stringify(req.body));
	console.log (req.body['Email']);
	res.render('index_dw');
	});


//******************************************************************

// this will extract data from the form and send request to the DB
//Step 1 - get the fields entered by the user in the form

//app.post("/results",function(req,res){
//	res.render('index_dw');

//res.end();
//connection.end();
//});



