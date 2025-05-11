import React, { useEffect, useState } from 'react';
import Letter from '../components/Offerletter';
import './Myoffer.css';
import Navbar from '../components/Navbar';

export default function Myoffer() {
  const [offerLet, setofferLet] = useState([]);

  const loaddata = async () => {
    try {
      let response = await fetch('http://localhost:3000/api/offerdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      response = await response.json();
      setofferLet(response[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
      <div>
        <Navbar/>
      </div>
    <div className='app'>
      <div className='container'>
        {offerLet.map((data, index) => (
          <div key={index}>
            <Letter
            id={data._id}
            name={data.name}
            joindt={data.joindt}
            completedt={data.completedt}
            domain={data.domain}
            

            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
