const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    quantity: {
        type: String,
        required: true,
        default: 0
    },
    price: {
        type: String,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
})

const Product = mongoose.model('product', productSchema);
module.exports = Product