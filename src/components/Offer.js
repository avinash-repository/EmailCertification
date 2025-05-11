import React, { useState } from 'react';
import "./Offer.css";
import { useNavigate } from 'react-router-dom';



export default function Offer() {

  let navigate = useNavigate()


  const [credentials, setcredentials] = useState({ name: "", joindt: "", email: "", completedt: "", domain: "" });

  const handleSubmit = async (e) => {


    e.preventDefault();
                      const response = await fetch("http://localhost:3000/api/createoffer", {
                        method: 'POST',

                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name: credentials.name, joindt: credentials.joindt, email: credentials.email, completedt: credentials.completedt, domain: credentials.domain })
                      });
                          const json = await response.json();
                          console.log(json);

                          if (!json.success) {
                            alert("Incorrect Information filled");

                              }
                    else {
                      alert("Details Submitted")
                    }

    navigate("/myoffer");
  }
  const onUpdate = async (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  }



  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login-container">

          <label htmlFor='name'>
            Name
            <input type="text"
              name="name"
              value={credentials.name}
              onChange={onUpdate}
            />
          </label>


          <label htmlFor='joindt'>
            Joining date
            <input type="text"
              name="joindt"
              value={credentials.joindt}
              onChange={onUpdate} />
          </label>

          <label htmlFor='email'>
            Email
            <input type="text"
              name="email"
              value={credentials.email}
              onChange={onUpdate} />
          </label>



          <label htmlFor='completedt'>
            Completion date
            <input type="text"
              name="completedt"
              value={credentials.completedt}
              onChange={onUpdate} />
          </label>


          <label htmlFor='domain'>
            Domain
            <input type="text"
              name="domain"
              value={credentials.domain}
              onChange={onUpdate} />
          </label>

          <button >Create </button>

        </div>
      </form>
    </div>

  )
}
