const express = require("express");

const app = express();

//Middleware
//Siempre que se haga uso de la app se ejecute express.text
app.use(express.text());
app.use(express.json);

//Routes
app.get("/adios", function (peticion, respuesta) {
  return respuesta.send("Adios mundo");
});
app.post("/saludo", function (peticion, respuesta) {
  const nombre = peticion.body;
  const mensaje = "Hola, " + nombre;
  return respuesta.send(mensaje);
});

//Listening on port 4000
app.listen(4000, function () {
  console.log("Funcionando... http://localhost:4000");
});
