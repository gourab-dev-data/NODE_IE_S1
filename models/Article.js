const mongoose = require('mongoose');
const slugify = require('slugify');

const ArticleSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Please add title']
    },
    slug: String,
    subTitle:{
        type: String,
        required: [true, 'Please add description']
    },
    paragraph:{
        type: Array,
        required: [true, 'Please add description']
    },
    imageUrls:{
        type: Array
    },
    category:{
        type: String,
        required: [true, 'Please add a tuition cost']
    },
    author:{
        type: Array,
        required: [true, 'Please add author details']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }    
});
ArticleSchema.pre('save', function(next){
    this.slug = slugify(this.title, { lower: true });
    next();
});

module.exports = mongoose.model('article', ArticleSchema);
