const mongoose = require('mongoose');

const { Schema } = mongoose;

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    expPrice: {
        type: String,
        required: true
    },
    boughtPrice: {
        type: String,
        required: true
    },
    boughtFlag:{
        type : Boolean,
        default : false
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('List', ListSchema);