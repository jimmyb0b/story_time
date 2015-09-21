console.log("something")
var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(4000, function(){
	console.log('listen on 4-thou')
});