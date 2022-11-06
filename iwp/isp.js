var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
const app = express();
var router = express.Router();
var db=require('./sqlconnection');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/form', function(req, res, next) { 
  res.sendFile(path.join(__dirname+'/isp.html'))
});
router.post('/add', urlencodedParser, function(req, res, next) {
  
  // store all the user input data
  const userDetails=JSON.parse(JSON.stringify(req.body));
  let name = userDetails.name;
  let email = userDetails.email;
  let mobile = userDetails.mobile;
  let plan = userDetails.plan;
  let address = userDetails.address;
  let doubts = userDetails.doubts;
  let query = `INSERT INTO customerISP (name, email, mobile, plan, address, doubts ) VALUES (?, ?, ?, ?, ?, ?);`;
  // insert user data into users table
  db.query(query, [name,email,mobile,plan,address,doubts],function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
  res.redirect('/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;