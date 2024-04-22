const express = require('express');
const bodyParser = require('body-parser');
const placehold= require('./routes/routes')
const place = require('./routes/pay');
const orde = require("./routes/prod");
const user = require("./routes/user");
const feed=require("./routes/feed");
const mongoose = require('mongoose');
const app = express();
const PORT=5321;
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placehold);
app.use('/api/placed',place);
app.use('/api/order',orde);
app.use('/api/user',user);
app.use('/api/fee',feed);
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port");
    else 
        console.log("Error occurred, server can't start", error);
    }
);
mongoose
  .connect('mongodb://127.0.0.1:27017/test_database')
  .then(() => {
    console.log("connected to server");
  })
  .catch(err => {
    console.log(err);
  });