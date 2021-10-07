const express = require('express');
const router = express.Router();
const Bank = require('../models/bankdetails.model');

router.route("/add").post( (req,res) => {
    const bank = req.body.bank;
    const accName = req.body.accName;
    const accNum = req.body.accNum

    const newBank = new Bank({
        user: [{ type: mongoose.Schema.Types.ObjectId,ref: 'user' }],
         bank,
         accName,
         accNum
    })
    newBank.save()
    .then(()=> res.json("details uploaded"))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;