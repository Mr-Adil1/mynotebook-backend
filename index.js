const connectDB = require("./db");
const express = require("express");
/* A middleware that allows cross-origin requests. */
var cors = require('cors')
/* Creating an instance of the express application. */
const app = express();
/* A middleware that allows cross-origin requests. */
app.use(cors())
const hostname = '0.0.0.0';
/* Setting the port to 4000. */
const port = 4000;
/* A middleware that parses the body of the request and makes it available on the request object. */
app.use(express.json())
/* This is a route handler. It is listening for a request to the root route (/) and then sending back a
response of 'Hello World!'. */

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`port ( http://${hostname}:${port} )`);
});
connectDB();
