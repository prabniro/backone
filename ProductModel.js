const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    picture: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model("products", productSchema);
