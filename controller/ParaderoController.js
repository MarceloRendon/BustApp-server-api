const axios = require("axios");



const prueba = (req, res) => {

    return res.status(200).json({
        message: "Soy una acción de prueba en mi controlador de artículos"
    })
}

const mensajePrueba = (req, res) => {
 
        return res.status(200).send({
            message: "Probando el endpoint mensaje de articulo"
        })

}

const paradero = async (req, res) => {
    try {
      const codigoParadero = req.params.codigoParadero;
      const apiUrl = `https://api.xor.cl/red/bus-stop/${codigoParadero}`;
  
      // Realizar la solicitud a la API externa para obtener la información del paradero
      const response = await axios.get(apiUrl);
  
      // Verificar si la solicitud fue exitosa
      if (response.status === 200) {
        // Extraer los datos del paradero de la respuesta
        const paraderoInfo = response.data;
  
        // Enviar los datos del paradero como respuesta
        res.status(200).json(paraderoInfo);
      } else {
        // Si hay algún problema con la solicitud a la API externa
        res.status(response.status).json({ error: 'Error al obtener información del paradero' });
      }
    } catch (error) {
      // Manejar errores de cualquier solicitud o proceso
      res.status(500).json({ error: 'Error interno del servidor' });
    }
}


module.exports = {
    prueba,
    mensajePrueba,
    paradero
}