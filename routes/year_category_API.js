var express = require("express")
var router = express.Router();
var fs = require('fs');








router.get("/year=:year2/category=:category2",function(req,res,next){

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




module.exports = router;


    
  
     
  






