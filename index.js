var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [{
    name: "Praneeth",
    age: 40,
    salary: 400000
  },
  {
    name: "Praneeth",
    age: 40,
    salary: 400000
  },
  {
    name: "Praneeth",
    age: 40,
    salary: 400000
  },
]
  res.render('index', { 
    title: 'Express',
    myName:"Sailaja",
    users: data
   });
});

module.exports = router;
