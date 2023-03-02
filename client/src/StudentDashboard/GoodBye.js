import React from 'react'
import Header from './Header';

const GoodBye = () => {
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
