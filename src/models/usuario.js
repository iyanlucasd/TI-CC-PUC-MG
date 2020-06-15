const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type:String,
        unique: true,
        required : true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});
const usuario = mongoose.model('usuario',usuarioSchema);
module.exports = mongoose.model('usuario', usuarioSchema);