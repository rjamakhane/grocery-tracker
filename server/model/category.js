const mongoose = require('mongoose');

const { Schema } = mongoose;
const catergorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Category', catergorySchema);