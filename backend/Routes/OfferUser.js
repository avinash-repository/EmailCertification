const express = require('express');

const router = express.Router()
const User = require("../models/Useroffer");
const {body, validationResult} = require('express-validator');
const nodemailer  =  require("nodemailer");

const transporter= nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user: 'avinashbhuyan8989@gmail.com',
            pass: 'cjeb cdbg xoja nakj'
        }
});



router.post("/createoffer",

[
   
    body('name').isLength({min:4})
]

  
  , async (req, res)=> {
 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{

        try {
            await User.create({
                name:req.body.name,
                joindt:req.body.joindt,
                completedt:req.body.completedt,
                domain:req.body.domain,
                email:req.body.email  

            })

                const emailcontent = `
                    <h2> Dear ${req.body.name}, </h2>
                    <br/>
                    <h2> Congratulations !!!</h2>
                    <p>
                    With reference to your interview, we are pleased to inform you that you have been selected as<h4 >${req.body.domain} Intern </h4>  in our NGO - “Suvidha Mahila Mandal” .  <br/>      <br />   <br /> 
                     The internship period will be from <h4>${req.body.joindt} to ${req.body.completedt} </h4>  
                     <br />   <br /> 
                    <br />
                     Your Work Base station is <h4 > Work From Home  </h4> and <h4 >5days a week </h4>  .
                     <br />   <br /> 
                     <br />
                     It is an <h4 >unpaid internship </h4>. The certificate of completion will be given only if you invest time  daily on all working days. You must participate in the daily team meetings through Google Meet. As the letter holds no value without a completion certificate with a unique identification number, which can be verified online.
                    <br/>
                     This agreement is entered between Suvidha Mahila Mandal, Registered office H.no. 1951,W.N.4, Khaperkheda,
                     Saoner, Nagpur, Maharashtra and hereafter -called Suvidha Foundation.
                     <br />   <br /> 
                     <br />
                
                     We wish you a successful journey with the Suvidha Foundatio
                     <br />   <br /> 
                     <br />
                     Thanks And Regards ,     <br /> 
                    Team HR Dept 

                    </p>

                `

                const mailing = {
                    from: 'avinashbhuyan8989@gmail.com',
                    to:req.body.email,
                    subject:'Offer Letter  - Suvidha Foundation',
                    html:emailcontent
                }

                transporter.sendMail(mailing , (error , info)=>{
                    if(error){
                        console.log(error);
                        console.log("falied to send email");
                        res.status(400).json({success:false , message:'Failed to send email'});

                    }
                    console.log("email sent successfully");
                    res.json({success:true , message:'Failed to send the email '});
                });

                res.json({ success: true , message:'Data submitted successfully' });
        }

        catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    }
      
    });



module.exports = router;