const express = require('express');

const { getAuthor, createAuthor } = require('../controllers/author');

const Author = require('../models/Author');
const advancedResults = require('../middleware/advancedResult');

routes = express.Router({ mergeParams: true });

routes.route('/')
.get(advancedResults(Author, {
    path: 'name',
    select: 'name description'
}),getAuthor)
.post(createAuthor);

module.exports = routes;