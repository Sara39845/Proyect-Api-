const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');

const { logerrors, errorHandler, boomErrorHandler } = require("./Middleware/error.handler");

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true); // Permite solicitudes sin origen (por ejemplo, en Postman)
    } else {
      callback(new Error('no permitido'));
    }
  }
};

// Aplica CORS con las opciones definidas
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hola server");
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logerrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("My port " + port);
});