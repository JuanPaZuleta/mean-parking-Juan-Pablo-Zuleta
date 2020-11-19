const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// configuraciones de servidores : Settings
app.set('port', process.env.PORT || 3000); //configuracion de servidor.
// funciones para procesar datos : Middlewares
app.use(morgan('dev'));
app.use(express.json()); //traductor a Json por medio de express, conocido como 'bodyParser'

//rutas de nuestro servidor : Routes
app.use('/api/cars', require('./routes/cars.routes'));


//Inicio del servidor : Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});