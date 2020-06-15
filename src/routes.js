const { Router } = require("express");
const axios = require("axios");
const routes = Router();
const googleTokenStrategy = require("passport-google-plus-token");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

//metodos: get, post, put, delete
//TIPOS DE PARAMETROS:

//QUERY PARAMS: req.query (filtro, ordenação, paginação, ...)
//ROUTE PARAMS: request.params (identificar um recurso na alteração ou remoção)
//BODY: request.body (dados para criação ou alteração de registro)

//MONGODB

//substituir o camilnho pro login, ainda ta no localhost
routes.get("/users/:id", (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);
  return response.json({ message: "Hello TI" });
});

routes.post("/usuario/:id", (request, response) => {
  const { google_username } = request.body;

  return response.json({ message: "Hello TI" });
});

module.exports = routes;
