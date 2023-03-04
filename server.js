 var udpPort = 9082;
 var url = require ('url');
 var udp = require ('dgram');
 var http = require ('http');
 var request = require ('request');
 var udpServer = udp.createSocket ('udp4').bind (9082, '127.0.0.1');
 
 udpServer.on ('close', function (err) {
     console.log ("UDP close");
 });
 
 udpServer.on ('error', function (err) {
     console.log ("UDP Error: " + err.toString ());
 });
 
 udpServer.on ('message', function (data, port) {
     console.log ("UDP received");
 });
 
 udpServer.on ('listening', function () {
     var address = udpServer.address ();
     console.log ("UDP Listening On IP: " + address.address + " at Port: " + address.port);
 });
 
 module.exports = function (){
     t$$anonymous$$s.send = function (objectID, script, action, variables){
 
     }
 }
