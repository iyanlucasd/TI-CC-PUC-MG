const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    name: String,
    email: String,
    senha: String,

});

module.exports = mongoose.model('usuario', usuarioSchema);