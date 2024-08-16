const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const fileupload = require('express-fileupload');

const connectDB = require('./config/db');

// Lode config file

dotenv.config({ path: './config/config.env' });

connectDB();

// Routes files
const author = require('./routes/author');
const article = require('./routes/article');


const app = express();

// Body Parser
app.use(express.json());


// Thired party Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/author', author);
app.use('/api/v1/article', article);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server runing in ${process.env.NODE_ENV} mode on post ${PORT}`));
