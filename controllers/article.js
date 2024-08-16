const asyncHandler = require("../middleware/async");
const ErrorResponse = require('../utils/errorResponse');
const Article = require('../models/Article');
const Author = require('../models/Author');

//@dec      Get all article
//@routes   GET /api/v1/article
//@routes   GET /api/v1/article/?author.name=name
//@routes   GET /api/v1/article/?title=title
//@access   Public
exports.getArticles = asyncHandler( async (req, res, next) => {
    const reqQuery = { ...req.query };
    let queryStr = JSON.stringify(reqQuery);
    console.log(queryStr);
    const articles = await Article.find(JSON.parse(queryStr));
    res.status(200).json({ success: true, count: articles.length, data: articles });
});

//@dec      Create article by authorId
//@routes   POST /api/v1/authors/:authorId/article
//@access   Public
exports.createArticle = asyncHandler( async (req, res, next) => {
    /*req.body.author = req.params.id;

    const author = await Author.findById(req.params.id);
    if(!author){
        return next( new ErrorResponse(`No author with the id of ${req.params.authorId}`, 404));
    }

    //console.log(req.body);*/
    const article = await Article.create(req.body);

    res.status(201).json({ success: true, data: article });
});