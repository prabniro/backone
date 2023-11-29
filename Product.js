
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    imageUrl: String,
 
});


module.exports = mongoose.model("products", productSchema);
