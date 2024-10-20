var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



const mongodb = require('./db/mongo');

mongodb.initClientDbConnection();



var app = express();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin:'*'
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res,next) {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});


app.set('views', path.join(__dirname, './views'));
app.set('view engine','ejs');




module.exports = app;
