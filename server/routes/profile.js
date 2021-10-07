const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.model');

router.route("/add").post((req,res) => {
    const fullname = req.body.fullname;
    const emailaddress = req.body.emailaddress;
    const phoneNum = req.body.phoneNum;
    const gender = req.body.gender;
    const address = req.body.address;
    const state = req.body.state;
    const country = req.body.country

    const newProfile = new Profile ({
        user: [{ type: mongoose.Schema.Types.ObjectId,ref: 'user' }],
        fullname,
        emailaddress,
        phoneNum,
        gender,
        address,
        state,
        country
    })

    newProfile.save()
    .then(() => res.json("profile added "))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;