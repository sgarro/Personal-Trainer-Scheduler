var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    multer = require('multer');
// TODO: routes and models for cards
var db = require('./model/db'),
    blob = require('./model/blobs'),
    client = require('./model/clients');

var routes = require('./routes/index'),
    blobs = require('./routes/blobs'),
    clients = require('./routes/clients');

//var users = require('./routes/users');

var app = express();

//avatars uploads
app.use(multer({ dest: path.join(process.cwd(), 'public')+'/uploads',
    rename: function (fieldname, filename, req, res) {
        return req.body.nome+req.body.cognome;


    },
    onFileUploadStart: function (file, req, res) {
        console.log(file.originalname + ' is starting ...');

    },
    onFileUploadComplete: function (file, req, res) {

        console.log(file.fieldname + ' uploaded to  ' + file.path)

    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('stylus').middleware(path.join(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/', routes);
app.use('/blobs', blobs);
app.use('/clients', clients);
// app.use('/cards', cards);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
