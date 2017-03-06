var path =require ('path') ;
var express =require ("express") ;
var recursive =require ('recursive-readdir') ;

var app =express () ;
    
app.get ("/", function (req, res) {
	res.redirect ("/drone.html") ;
}) ;

app.configure (function () {
	app.use (express.methodOverride ()) ;
	app.use (express.bodyParser ()) ;
	app.use (express.static (__dirname)) ;
	app.use (express.errorHandler ({
		dumpExceptions: true, 
		showStack: true
	})) ;
	app.use (app.router) ;
}) ;

// get optional port specification
var port = 8050;
if ( process.argv.length >= 3 ) {
	try {
		port =parseInt (process.argv [2]) ;
	} catch ( err ) {
		console.log ( "can't parse port number from: " + process.argv [2]) ;
	}
}

console.log( "running drone webserver on localhost:" + port ) ;
app.listen (port) ;
