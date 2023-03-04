import React from 'react'
import Header from './Header';

const GoodBye = () => {
  fetch('https://cyf-student-register.onrender.com/api/auth/logout', {
      method: "get",
      headers: {
        "Content-type": "application/json"
      },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  return (
    <div className='signed-out__page'>
      <Header/>
      <div className="good__bye">
        <p>Signed out</p>
        <p>See You soon!</p>
      </div>
    </div>
  );
}

export default GoodBye
