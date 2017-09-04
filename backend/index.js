const http = require('http');

const hostname = '127.0.0.1';
const port = 3456;

const server = http.createServer();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// ### Mongo

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

//   insertDocuments(db, function() {
//     db.close();
//   });
    findDocuments(db, (docs) => console.log(docs))
});




// ### Request handling

server.on('request', (req, res) => {  
  // the same kind of magic happens here!
  const { method, url } = req;

    switch(url) {
        case '/init':

            break;
        default:
            break;
    }

res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World\n ${url}`);
});






// ### Websocket handling

/**
 * TODO: micro-protocol
 * 
 * init | roomId => assign connection to specific room
 * - ? possibly take roomId on handshake from the token
 * - provide the initial set of room information 
 * - subscribe to the room updates pool (handle disconnects)
 *
 * create/update/delete/merge | { id, payload }
 */

const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server, path: '/websocket' });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});