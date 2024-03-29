const express = require('express')
const axios = require('axios');
const routerApi = require("./routes")
const app = express()

//app.get('/productos', (req, res) => res.send('<h1>HOLA! endpoint productos</h1>'))

// DB connection
const mongoose = require('mongoose')
mongoose
    .connect("mongodb+srv://marcelorendon:1584ma2290796@cluster0.egfmjgz.mongodb.net/garaje-live-coding", { useNewUrlParser: true })
    .then(()=> console.log('Conectado a BD'))


// Model
const Coaster = require('./Models/Coaster.model')

// CORS
const cors = require('cors')
app.use(cors())

// Convertir body a json
app.use (express.json()) //  Recibir datos con content-type app/json
app.use(express.urlencoded({extended: true})) // Convertir cada propiedad de x-www-form-urlencoded a un objeto json

// Rutas

routerApi(app);

app.get("/", (req, res) =>{
  res.send({
      message: "Hello World with Express"}
      );
});

app.get("/probando", (req, res) => {
  return res.status(200).send({
      message: "Probando el endpoint"
  })
})


// // Routting
// app.get('/api/coaster', (req, res) => {
//     Coaster
//         .find()
//         .then(allCoasters => res.json(allCoasters))
// })

// app.get('/api/details/:coaster_id', async (req, res) => {
//     const {coaster_id} = req.params

//     Coaster
//         .findById(coaster_id)
//         .then(coaster => res.json(coaster))
// })


// app.get('/paradero/:codigoParadero', async (req, res) => {
//     try {
//       const codigoParadero = req.params.codigoParadero;
//       const apiUrl = `https://api.xor.cl/red/bus-stop/${codigoParadero}`;
  
//       // Realizar la solicitud a la API externa para obtener la información del paradero
//       const response = await axios.get(apiUrl);
  
//       // Verificar si la solicitud fue exitosa
//       if (response.status === 200) {
//         // Extraer los datos del paradero de la respuesta
//         const paraderoInfo = response.data;
  
//         // Enviar los datos del paradero como respuesta
//         res.status(200).json(paraderoInfo);
//       } else {
//         // Si hay algún problema con la solicitud a la API externa
//         res.status(response.status).json({ error: 'Error al obtener información del paradero' });
//       }
//     } catch (error) {
//       // Manejar errores de cualquier solicitud o proceso
//       res.status(500).json({ error: 'Error interno del servidor' });
//     }
// })

// app.get('/productos', (req, res) => res.json({
//     message: 'Hola!',
//     date: new Date(),
//     campus: 'Madrid'
// }))


// Crear servidor y escuchar peticiones http
app.listen(5005, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:5005`);
})