const mongoose = require('mongoose');

const { Schema } = mongoose;

const ListItemsSchema = new Schema({
    list: {
        type: Schema.Types.ObjectId,
        ref : 'List'
    },
    item : {
        type: Schema.Types.ObjectId,
        ref : 'Item'
    },
    quantity: {
        type : String,
        required : true
    },
    expPrice: {
        type: String,
        required: true
    },
    boughtPrice: {
        type: String,
        required: true
    },
    remarks:{
        type : String
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('List_Item', ListItemsSchema);