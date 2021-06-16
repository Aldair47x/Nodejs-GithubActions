
const http = require("http");
const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();


const host = 'localhost';
const port = 8000;





app.use(express.urlencoded({
  extended: false
}));


app.use(cookieParser());

app.use(bodyParser.json({
  type: function() {
      return true;
  }
}));

app.use('/', indexRouter);



const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = server;
module.exports = app;
