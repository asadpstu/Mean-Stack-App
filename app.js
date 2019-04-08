var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//Creating Api end Point//
var routeEndPoint = require('./routes');


var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var config = require('./config');

var app = express();
process.env.NODE_ENV = "development";


/* Connection string - v1*/
function connectdb()
{
   mongoose.connect(config.db);
   mongoose.connection.on('error',function(err){
     console.log("connnection failed"+err);
   });
}

connectdb();

/* Connection string v2
var uri = config.testdb;
mongoose.connect(uri).catch((error) => { console.log(error); });
*/

/* Connection string v3
mongoose.connect(config.db,
  function(err){
  if(err){
      console.error("Error! "+err);
  }
  else
  {
      console.log("Db Connected");
  }
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routeEndPoint);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
