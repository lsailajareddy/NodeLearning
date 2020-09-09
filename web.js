var http = require('http');
var rl= function(req,res){
if(req.url=='/login'){
res.end("<h1> Welcome to login page</h1><div><input type='text'</div>");
}
else{
res.end("<h1>Kaise ho aap log!!</h1>")
}
// res.end("<h1>Kaise ho aap log!!</h1>")
}
var server = http.createServer(rl);
server.listen(3000);