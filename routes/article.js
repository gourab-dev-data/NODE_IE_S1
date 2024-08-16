const express = require('express');

const { getArticles, createArticle } = require('../controllers/article');

const Article = require('../models/Article');

routes = express.Router({ mergeParams: true });


routes.route('/').get(getArticles);
routes.route('/').post(createArticle);

module.exports = routes;