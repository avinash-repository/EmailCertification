import React ,  {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./Login.css";

export default function Login() {

  let navigate= useNavigate()
  const [credentials, setcredentials ]= useState({ email:"", password:""});

  const handleSubmit = async (e) => {
  
  
          e.preventDefault();
          const response =await fetch("http://localhost:3000/api/loginuser",{
           method:'POST',
           
           headers:{
              'Content-Type':'application/json'
           },
           body:JSON.stringify({ email:credentials.email, password:credentials.password })   
          });


          const json = await response.json();
          console.log(json);
  
          if(!json.success){
            alert("Incorrect Emailid and Password ")
          }
          
          if(json.success){
          
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");
          }
  
  }
  const onChange = async (event)=>{
      setcredentials({...credentials, [event.target.name]:event.target.value})
  
  }
  return (
   
    <div className="login-page">
       <form onSubmit={handleSubmit} >
    <div className="login-container">
 
        <label htmlFor='email'>
          Username:
          <input type="text" name="email" value={credentials.email} onChange={onChange} />
        </label>
        <label htmlFor='password'> 
          Password:
          <input type="password" name="password" value={credentials.password} onChange={onChange} />
        </label>
        <button  >Login</button>
    
    </div>
    </form>
  </div>

  )
}
