const express = require('express');
const mongoose = require('mongoose');
const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hardknowledge:12345678@cluster0-w1ktf.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.json());
//metodos: get, post, put, delete
//TIPOS DE PARAMETROS:

//QUERY PARAMS: req.query (filtro, ordenação, paginação, ...)
//ROUTE PARAMS: request.params (identificar um recurso na alteração ou remoção)
//BODY: request.body (dados para criação ou alteração de registro)

//MONGODB   


//substituir o camilnho pro login, ainda ta no localhost
app.get('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ message: 'Hello TI' });
});

app.listen(1024);