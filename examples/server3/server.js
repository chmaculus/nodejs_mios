let express = require('express'); 
let express = require('http'); 

let app = express ()
app.post("/",(request, response) => {
    console.log("body: "+request);
    response("body: "+request);
});

server.listen(8000);
console.log("Server running on port 8000");


/*
var http = require('http');
    var server = http.createServer ( function(request,response){
    









        response.writeHead(200,{"Content-Type":"text\plain"});



    if(request.method == "GET"){
            response.end("received GET request.")
    }

    else if(request.method == "POST"){
        response.end("received POST request.");
        //console.log(request.post.modulo);
        response.end("p modulo: ");
    }
    else{
        response.end("Undefined request .");
    }
});

server.listen(8000);
console.log("Server running on port 8000");
*/

