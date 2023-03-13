var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  
    res.write('Hello World!\n'); //write a response to the client  
    res.write('this is V2 of NodeApp');
    
    res.end(); //end the response  
}).listen(8080); //the server object listens on port 8080   
  
// Console will print the message  
console.log('Server running at 8080'); 


