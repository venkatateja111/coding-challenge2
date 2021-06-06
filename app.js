var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
name_Router = require('./routes/name_API');
var app = express();
var fs = require('fs');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/name_API/:name1',name_Router)

app.get('/search_by_name_API/name=:name1', function(req, res) {

    var name =  req.params.name1
    console.log(name)
    var names_array = []
    var student;
    fs.readFile('prize.json', (err, data) => {
      if (err) throw err;
      let student = JSON.parse(data);

      for(i=0; i<student.prizes.length ; i++){
        for(j=0; j< student.prizes[i].laureates.length ; j++){
          if(student.prizes[i].laureates[j].firstname.toLowerCase().includes(name.toLowerCase())   || student.prizes[i].laureates[j].surname.toLowerCase().includes(name.toLowerCase()) )
          {
            const obj = {
              Id : student.prizes[i].laureates[j].id,
              Firstname:  student.prizes[i].laureates[j].firstname,
              Surname : student.prizes[i].laureates[j].surname,
              Year : student.prizes[i].year,
              Motivation: student.prizes[i].laureates[j].motivation,
              Category: student.prizes[i].category
            }
            names_array.push(obj)

          }
        }
      }
      res.send(names_array)

  });
})



app.get('/search_by_year_API/year=:year1', function(req, res) {

  var year =  req.params.year1
  console.log(year)
  var names_array = []
  var student;
  fs.readFile('prize.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);

    for(i=0; i<student.prizes.length ; i++){
      for(j=0; j< student.prizes[i].laureates.length ; j++){
        
        if(student.prizes[i].year == year)
        {
          const obj = {
            Id : student.prizes[i].laureates[j].id,
            Firstname:  student.prizes[i].laureates[j].firstname,
            Surname : student.prizes[i].laureates[j].surname,
            Year : student.prizes[i].year,
            Motivation: student.prizes[i].laureates[j].motivation,
            Category: student.prizes[i].category
          }
          names_array.push(obj)

        }
      }
    }
    res.send(names_array)

});
})











app.get('/search_by_year_category_API/year=:year2/category=:category2', function(req, res) {

  var year =  req.params.year2
  var category = req.params.category2
  var names_array = []
  var student;
  fs.readFile('prize.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);

    for(i=0; i<student.prizes.length ; i++){
      for(j=0; j< student.prizes[i].laureates.length ; j++){
        
        if(student.prizes[i].year == year && student.prizes[i].category.toLowerCase()  == category.toLowerCase() )
        {
          const obj = {
            Id : student.prizes[i].laureates[j].id,
            Firstname:  student.prizes[i].laureates[j].firstname,
            Surname : student.prizes[i].laureates[j].surname,
            Year : student.prizes[i].year,
            Motivation: student.prizes[i].laureates[j].motivation,
            Category: student.prizes[i].category
          }
          names_array.push(obj)

        }
      }
    }
    res.send(names_array)

});
})






app.get('/search_by_order_API/order=:order', function(req, res) {

  var order =  req.params.order
  var names_array = []
  var student;
  fs.readFile('prize.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);

    for(i=0; i<student.prizes.length ; i++){
      for(j=0; j< student.prizes[i].laureates.length ; j++){
        
        
          const obj = {
            Firstname:  student.prizes[i].laureates[j].firstname,
            Surname : student.prizes[i].laureates[j].surname,
            Year : student.prizes[i].year,
            Category: student.prizes[i].category
          }
          names_array.push(obj)

        
      }
    }
    
    var array2 = [].concat.apply([], names_array);

    var array3 = array2.sort((a,b) => {
      var nameA = a.Firstname.toUpperCase(); 
      var nameB = b.Firstname.toUpperCase(); 
      if(order.toLowerCase() == "ascending" || order.toLowerCase() == "asc")
      {
        
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    else if(order.toLowerCase() == "descending" || order.toLowerCase() == "desc")
    {
      
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;

    }
    
  })
    
    names_array = array3



    res.send(names_array)

});
})





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
