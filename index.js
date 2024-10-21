const express = require('express');
const app = express();

// Configurar el puerto
const port = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, Azure!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});
