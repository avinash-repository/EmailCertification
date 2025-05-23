const express = require('express');

const router = express.Router()
const User = require("../models/User");
const {body, validationResult} = require('express-validator');

router.post("/createuser",

[
    body('email', 'Not valid email').isEmail(),
    body('name').isLength({min:4}), 
  body('password','Password should contain min 5 letters').isLength({min: 5})]  
  
  , async (req, res)=> {
 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{
        try {
            await User.create({
                name:req.body.name,
                password:req.body.password,
                email:req.body.email,
                address:req.body.address,
                department:req.body.department

            })
                res.json({ success: true });
        }

        catch (error) {
            console.log(error)
            res.json({ success: false });

        }

    }
 
    });



module.exports = router;