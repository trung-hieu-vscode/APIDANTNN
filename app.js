var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var specieRouter = require('./routes/specieApi');
var categoryRouter = require('./routes/categoryApi');
var petRouter = require('./routes/petApi');
var userRouter = require('./routes/userApi');
var orderRouter = require('./routes/orderApi');
var orderDetailRouter = require('./routes/orderDetailApi');

var app = express();

app.use(cors()); // Kích hoạt CORS cho tất cả các yêu cầu
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

mongoose.connect('mongodb+srv://khaintps35811:261002@petappapi.xtmlkbx.mongodb.net/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/specie', specieRouter);
app.use('/category', categoryRouter);
app.use('/pet', petRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/orderDetail', orderDetailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
