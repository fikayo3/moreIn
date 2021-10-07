const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// create a user.
router.route("/signup").post((req, res) => {
    const { emailaddress,phoneNum,password } = req.body;
    if (!emailaddress && !phoneNum && !password){
      res.status(500).json({msg:"pls ensure fields are not empty "})
    }
     if (validateEmail(emailaddress) === false){
       res.status(500).json({msg:"enter correct email "})
       return;
     }
    let newUser = new User({
      emailaddress,
      phoneNum,
      passwordHash: bcrypt.hashSync(password, 10)
    });
  
    newUser
      .save()
      .then(user => {
        jwt.sign({
          emailaddress: newUser.emailaddress
        }, 'secret', (err, token) => {
          if(err) throw err;
          res.send({
            token,
            status:true,
            user: {
              emailaddress: user.emailaddress
            }
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(200).json({msg: `User ${err.keyValue['emailaddress']} already exists. Try Loggin In.`, status:false});
      });
  })

  router.route("/login").post((req, res) => {
    const { emailaddress, password } = req.body;

    if (!emailaddress  && !password){
      res.status(500).json({msg:"pls ensure fields are not empty "})
    }

    if (validateEmail(emailaddress) === false){
      res.status(500).json({msg:"enter correct email "})
      return;
    }

    User.findOne({emailaddress})
      .then(user => {
        if(!user) {
          res.status(500).json({msg: "No User with that emailaddress: " + emailaddress});
          return;
        } else if(!bcrypt.compareSync(password, user.passwordHash)) {
          res.status(500).json({msg: "Invalid Password"});
        } 
        jwt.sign({
          emailaddress: user.emailaddress
        }, 'secret', (err, token) => {
          if(err) throw err;
          res.send({
            token,
            status:true,
            user: {
              emailaddress: user.emailaddress
            }
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(200).json({msg: `User ${err.keyValue['emailaddress']} already exists. Try Loggin In.`, status:false});
      });
  });

  module.exports = router;