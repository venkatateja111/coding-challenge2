var express = require("express")
var router = express.Router();
var fs = require('fs');








router.get("/name=:name1",function(req,res,next){

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




module.exports = router;


    
  
     
  






