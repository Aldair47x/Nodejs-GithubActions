const express = require('express');
const router = express.Router();
const projects = require('../data-store');


/* GET projects. */
router.get('/projects/:id', function(req, res, next) {
  let id = req.params.id;
  let auxFlag = false;
  
  if( id < 0 ){
    
    res.status(400).json({
      message: 'BAD REQUEST'
    })

  } else {
    
    projects.forEach(project => {
      if(project.id == id){
        auxFlag = true;
        res.status(200).json(project)
      }
    })

    if(!auxFlag){
      res.status(404).json({
        "id": "Not found in projects"
      })
    }
    
  }
  
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  
  res.status(400).json({
    message: 'BAD REQUEST'
  })

});



module.exports = router;
