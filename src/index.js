const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hardknowledge:12345678@cluster0-w1ktf.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.json());
app.use(routes);

app.listen(1024);