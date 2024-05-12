// Importar módulos necesarios
const express = require('express');
const cors = require('cors');

// Crear una instancia de express
const app = express();
const PORT = 5000;

// Usar CORS para permitir peticiones cruzadas
app.use(cors());

// Definir una ruta raíz y enviar una respuesta
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente!');
});

// Poner el servidor a escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
