import React, { useState } from 'react';
import './Offerletter.css';


const Offerletter = ({name, id , domain, joindt, completedt}) => {
    const [accordion1Open, setAccordion1Open] = useState(false);


    const bold={
        fontWeight:'bold',
        textTransform: 'capitalize',
    };
    const toggleAccordion1 = () => {
        setAccordion1Open(!accordion1Open);

    };


    return (
        <>
      
        <div className="accordion-container">
            <div className={`accordion ${accordion1Open ? 'open' : ''}`}>
                <div className="accordion-title" onClick={toggleAccordion1}>
                  <span style={bold}>
                  {name} ----- ({domain})
                    </span>  
                </div>
                {accordion1Open && (
                    <div className="accordion-content">
                        <p> <h4>
                        Congratulations !!!!
                            </h4>
                            <br />
                            To,    <br />

                        <p style={bold}>
                        {name}
                        </p>
                         <br />
                            With reference to your interview, we are pleased to inform you that you have been selected as <span style={bold}>  {domain} Intern </span>  in our NGO - “Suvidha Mahila Mandal”, with the following terms and conditions;- <br/>
                            ● Apart from your domain work, you will provide the voluntary and fundraising Servicesto SUVIDHA FOUNDATION.
                            <br />
                            ● The internship period will be from  <span style={bold}>{joindt} to {completedt}</span>  .   
                   
                            <br />
                            ● Your Work Base station is <span style={bold}> Work From Home  </span> and <span style={bold}>5</span> days a week.
                            <br />
                            ● It is an <span style={bold}>unpaid internship </span>. The certificate of completion will be given only if you invest 4 hours daily on
                            all working days. You must participate in the daily team meetings through Google Meet. As the letter holds
                            no value without a completion certificate with a unique identification number, which can be verified online.
                            <br />
                            ● During the internship period and thereafter, you will not give out to anyone in writing or by word of mouth or
                            otherwise particulars or details of work process, technical know-how, research carried out, security arrangements
                            and/ormatters of confidential orsecret nature which youmay come across during yourservice in this organization.
                            <br />
                   
                        
                            This agreement is entered between Suvidha Mahila Mandal, Registered office H.no. 1951,W.N.4, Khaperkheda,
                            Saoner, Nagpur, Maharashtra and hereafter -called Suvidha Foundation.
                            <br />
                       
                            We wish you a successful journey with the Suvidha Foundation.
                            <p>

                           
                            From <span style={bold}>HR 
                            <p>
                                Suvidha Foundation
                            </p>
                            </span>
                            </p>
                        </p>
                    </div>
                )}
            </div>


        </div>
        
        </>
    );
};

export default Offerletter;
