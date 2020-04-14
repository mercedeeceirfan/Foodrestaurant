const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const publicRoutes = require('./routes/publicRoutes')();
const adminRoutes = require('./routes/adminRoutes');
const mongoose = require("mongoose");
const config = require("./config/config");
const cors = require("cors");

const router = express.Router();

const db = "mongodb://127.0.0.1:27017/restaurant";
const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connection.openUri(db);

app.use(express.static(__dirname+'/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);
app.use('/', publicRoutes);
app.use('/', adminRoutes);

if(!config.ssl.use) {
  var http = require('http');
  server = http.createServer(app);
} else {
  var https = require('https');
  var opt = {
      key: fs.readFileSync(config.ssl.key),
      cert: fs.readFileSync(config.ssl.cert)
  };

  server = https.createServer(opt, app);
}

 /* app.listen(port, ()=>{
  console.log("Connected to port:" + port);
}); */

const io = require('socket.io')(server);

io.on('connection', (socket)=>{
  console.log('user connected');
  socket.on('test', (data)=>{
    console.log(data);
  })
});


/* app.set('socketio', io); */
server.listen(port, ()=>{
  console.log("Connected to port:" + port);
});