import React from 'react'
import "./Home.css";
import { Link , useNavigate} from "react-router-dom";
import logo from "../images/suvidhalogo.png";
import Text from "../components/Text";
import Offer from "../components/Offer";

export default function Home() {
    let navigate = useNavigate();

    const handlelogout = ()=>{
    localStorage.removeItem('authToken')

    navigate("/")
    }



  return (
    <>

    <div className='navbar'>
      <div className='logo'>

        <Link to="/">
        <img src={logo} alt='logo' />
        </Link>
  

      </div>
      <div className='authorisation'>

      <div className='button'>
          <Link to="/myoffer">
            Offer Letter 
            </Link>
          </div>{}
          {(localStorage.getItem("authToken")) ?
          
          <div className='button'>
          <Link to="/" onClick={handlelogout}>
            Logout
            </Link>
          </div>
        
          :
          <div className='button'>
          <Link to="/login">
            Login
            </Link>
          </div>
        
  
          }
                   {(!localStorage.getItem("authToken")) ?
                       <div className='button'>
                       <Link to="/signup">
                         SignUp
                         </Link>
                       </div>
                   :""}
   
      
   

      </div>


    </div>
    {(!localStorage.getItem("authToken")) ?
        <Text/>
    :
    <Offer/>
    }


    </>
  )
}
