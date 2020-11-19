const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
    marca: { type: String, required: true },
    anio: { type: String, required: true },
    modelo: { type: String, required: true },
    propietario: { type: String, required: true },
    estado: { type: Boolean, required: true },
    deuda: { type: Number, required: true }
})

module.exports = mongoose.model('Car', CarSchema);