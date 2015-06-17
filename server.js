var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',             
  name: 'app-http-server',   
  port: 8000,                        
  followSymlink: true 
});

server.start(function () {
  console.log('Server listening to', server.port);
});