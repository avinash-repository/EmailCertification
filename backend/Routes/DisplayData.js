const express = require('express')
const router = express.Router()


router.post('/offerdata', (req, res)=>{

    try{
         
        res.send([global.offer_letters]);

    }
    catch(error){
        console.error(error.message);
        res.send("Server Error");
    }
});

module.exports= router;
