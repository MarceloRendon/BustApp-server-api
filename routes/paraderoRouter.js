const express = require("express")
const router = express.Router()
const axios = require("axios");
const ParaderoController = require("../controller/ParaderoController")

// Rutas de prueba
router.get("/ruta-de-prueba", ParaderoController.prueba)
router.get("/mensaje", ParaderoController.mensajePrueba)

// router.get('/paradero/:codigoParadero', async (req, res) => {
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

router.get('/paradero/:codigoParadero', ParaderoController.paradero)


module.exports = router;