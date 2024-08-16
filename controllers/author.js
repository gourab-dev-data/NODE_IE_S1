const asyncHandler = require("../middleware/async");
const ErrorResponse = require('../utils/errorResponse');
const Author = require('../models/Author');

//@dec      Get all author
//@routes   GET /api/v1/author
//@access   Public
exports.getAuthor = asyncHandler( async (req, res, next) => {  
    const author = await Author.find();
    res.status(200).json({ success: true, data: author });
});

//@dec      Create author
//@routes   POST /api/v1/author
//@access   Public
exports.createAuthor = asyncHandler( async (req, res, next) => {

    //console.log(req.body);
    const author = await Author.create(req.body);

    res.status(201).json({ success: true, data: author });
});