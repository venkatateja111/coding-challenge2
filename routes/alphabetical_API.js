var express = require("express")
var router = express.Router();
var fs = require('fs');








router.get("/order=:order",function(req,res,next){

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




module.exports = router;


    
  
     
  






