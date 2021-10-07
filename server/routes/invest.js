
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Invest = require('../models/invest.model');
const User = require("../models/user.model")

// create an investment 
router.route("/add").post( (req,res) => {
    let demail = req.body.emailaddress;
    const amount = req.body.amount;
    const plan = req.body.plan;
    console.log(demail)
    User.findOne({"emailaddress":demail}).then(user => {
        let roi = 0;
        if (plan.toLowerCase() === "regular"){
            roi = 20;
        } else if (plan.toLowerCase() === "gold"){
            roi = 30
        } else if(plan.toLowerCase() === "diamond"){
            roi = 35
        } else if (plan.toLowerCase() === "partnership"){
            roi = 50
        }
        if (plan === "regular" && !(amount >= 10000 && amount <= 200000) ){
             res.status(500).json({msg:"enter btw 10000-200000"})
        } else if(plan === "gold" && !(amount >= 210000 && amount <= 500000)){
             res.status(500).json({msg:"enter btw 210000-500000"})
        }  else if(plan === "diamond" && !(amount >= 510000 && amount <= 1000000)){
             res.status(500).json({msg:"enter btw 510000-1000000"})
        }  else if(plan === "partnership" && !(amount > 1000000 )){
             res.status(500).json({msg:"enter no greater than 1000000"})
        }

        let returns = (roi/100 * amount) + amount;
        let confirmedUser = user;
       

        const newInvestment = new Invest ({
            confirmedUser,
            amount,
            plan,
            roi,
            returns
        })
    
        newInvestment.save()
        .then(()=> res.json({msg:"item added "}))
        .catch(err => res.status(400).json('Error: ' + err))
    }).catch(err => res.status(400).json({msg:'user not found'}))
})

// get all investments
router.route("/getAll").get((req,res) => {
    let email = req.body.emailaddress;
    User.findOne({email}).then(user => {
        console.log(user)
        Invest.find(email)
        .then(excersises => res.json(excersises))
        .catch(err => res.status(400).json('Error: ' + err));
    }).catch(err => res.status(400).json("error:" + err) )
})

module.exports = router;