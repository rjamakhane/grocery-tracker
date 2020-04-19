const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type : Schema.Types.ObjectId,
        ref : 'Category'
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Item', ItemSchema);