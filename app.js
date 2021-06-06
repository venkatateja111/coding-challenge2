var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
name_API = require('./routes/name_API');
year_API = require('./routes/year_API');
year_category_API = require('./routes/year_category_API');
alphabetical_API = require('./routes/alphabetical_API');
var app = express();
var fs = require('fs');


app.use(express.static(path.join(__dirname, 'client/build')));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


app.use('/search_by_name_API',name_API)
app.use('/search_by_year_API',year_API)
app.use('/search_by_year_category_API',year_category_API)
app.use('/search_by_order_API',alphabetical_API)


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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}

const PORT = process.env.PORT || 9000;
app.listen(PORT)



module.exports = app;
