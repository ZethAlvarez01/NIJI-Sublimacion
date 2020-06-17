const {Schema, model} = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    quantity: {type: Number},
    category: {type : String},
    price: {type: Number},
    reference: {type: String},
    created_at:{ type: Date, default: Date.now()}
});

module.exports = model('Image', imageSchema);