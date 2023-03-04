
# Udp with Unity (C#)

This is a Example of Udp with unity connection usng c#


## Authors

- [@pawitpr](https://www.github.com/pawitpr)

Discord Username : PawitSahare#2282

## Documentation
server.js
```js
 var udpPort = 9082;
 var url = require ('url');
 var udp = require ('dgram');
 var http = require ('http');
 var request = require ('request');
 var udpServer = udp.createSocket ('udp4').bind (9082, '127.0.0.1');
 
 udpServer.on ('close', function (err) {
     console.log ("error faced udp closed !!");
 });
 
 udpServer.on ('error', function (err) {
     console.log ("UDP Have Error: " + err.toString ());
 });
 
 udpServer.on ('message', function (data, port) {
     console.log ("UDP received");
     console.log("Client sended msg")
 });
 
 udpServer.on ('listening', function () {
     var address = udpServer.address ();
     console.log ("UDP On Port: " + address.address + " at Port: " + address.port);
 });
 
 module.exports = function (){
     t$$anonymous$$s.send = function (objectID, script, action, variables){
 
     }
 }
 ```
 client.c
 ```c
  using UnityEngine;
 using System.Text;
 using System.Collections;
 using System.Net.Sockets;
 using System.Net;
 
 public class Web : MonoBehaviour {
 
     [SerializeField]
     int UdpPort = 9082;
     [SerializeField]
     string host = "127.0.0.1";
     [SerializeField]
     UTF8Encoding encoding = new UTF8Encoding ();
     [SerializeField]
     WaitForSeconds UdpDelay = new WaitForSeconds (.3f);
     [SerializeField]
     IPEndPoint UdpEndPoint = null;
     [SerializeField]
     UdpClient client = null;
 
     [System.Serializable]
     public class JsonObject : System.Object {
         public string[] values;
 
         public JsonObject (string[] array) {
             values = array;
         }
     }
 
     public void UdpConnect () {
         client = new UdpClient ();
     }
 
     public void UdpDisconnect () {
         client.Close ();
     }
 
     void UdpReceive(byte[] data){
         string JsonString = encoding.GetString (data);
         JsonObject Json = JsonUtility.FromJson <JsonObject> (JsonString);
     }
 
     IEnumerator UdpCoro() {
         byte[] data = null;
         w$$anonymous$$le (true){
             if (client.Available > 0) {
                 yield return null;
                 data = client.Receive (ref UdpEndPoint);
                 UdpReceive (data);
                 data = null;
             }
             yield return UdpDelay;
         }
     }
 
     public void UdpSend (params string[] values){
         JsonObject Json = new JsonObject (values);
         string Jsonstring = JsonUtility.ToJson (Json);
         byte[] data = encoding.GetBytes (Jsonstring);
         client.Send (data, data.Length, host, UdpPort);
     }
 
     void Start (){
         UdpConnect ();
         UdpSend ("Test");
     }```
## Deployment

To deploy this project run

```bash
  git clone <repo lnk> 
  npm install .
  node server.js
  # Server Started

```

