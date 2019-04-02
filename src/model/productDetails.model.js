var mongoose = require('mongoose');

const ProductDetailSchema  = new mongoose.Schema({
    priceRange: [String],
    color: [String],
    material: [String],
    occasion: [String],
    size: [String]
});


const ProductDetail = mongoose.model('productdetail', ProductDetailSchema);
module.exports = ProductDetail;