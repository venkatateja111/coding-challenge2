var express = require("express")
var router = express.Router();
var fs = require('fs');








router.post("/",function(req,res,next){

    var name =  req.params.name
    fs.readFile('prize.json', (err, data) => {
      if (err) throw err;
      let student = JSON.parse(data);
      console.log(student);
  });
    
   
    
    
    
})

module.exports = router;


    
  
     
  






