const express = require('express');
const router = express.Router();
const Secure = require('../models/security.model');

router.route("/change").post((req,res) => {
    const oldPass = req.body.oldPass
    const newPass = req.body.newPass
    const confirmPass = req.body.confirmPass
    
    if (newPass != confirmPass){
        res.status(422).json({msg: "pls ensure you typed correct details"})
        return;
    }

    const newSecure = new Secure ({
        
        oldPass,
        newPass
    })
    newSecure.save()
    .then(() => res.json("password changed"))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;