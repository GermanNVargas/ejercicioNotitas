const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
var methodOverride = require('method-override');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const indexRouter = require('./routes/index');
const detailRouter = require('./routes/detail');
const notasRouter = require('./routes/notas');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/detail', detailRouter);
app.use('/notas', notasRouter);

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


app.listen(3000, function() {
  console.log("Servidor corriendo en el puerto 3000")
})

