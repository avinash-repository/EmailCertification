import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";

export default function SignUp() {

  let navigate= useNavigate()


  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", address: "" });

  const handleSubmit = async (e) => {


    e.preventDefault();
    
    const response = await fetch("http://localhost:3000/api/createuser", {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, department: credentials.department, password: credentials.password, address: credentials.address })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Incorrect Credentials")
    }
    else{
      navigate("/login");
    }

  }
  const onChange = async (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  }


  return (


      <form  onSubmit={handleSubmit}>
        <div className='cont'>



          <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="htmlForm-container">
              <label htmlFor='name'>Name:</label>
              <input
                type="text"
                name='name'
                value={credentials.name}
                onChange={onChange}
              />
              <label htmlFor='email'>Email:</label>
              <input
                type="email"
                name='email'
                value={credentials.email}
                onChange={onChange}
              />
              <label htmlFor='department'>Department:</label>
              <input
                type="text"
                name='department'
                value={credentials.department}
                onChange={onChange}
              />
              <label htmlFor='password'>Password:</label>
              <input
                type="password"
                name='password'
                value={credentials.password}
                onChange={onChange}
              />
              <label htmlFor='address'>Address:</label>
              <textarea
                name='address'
                value={credentials.address}
                onChange={onChange}
              ></textarea>
              <button  >Sign Up</button>
            </div>
          </div>
        </div>
      </form>


  )
}
