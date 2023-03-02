import React from 'react'

const GoodBye = () => {
  fetch('http://127.0.0.1:4200/api/auth/logout', {
      method: "get",
      headers: {
        "Content-type": "application/json"
      },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  return (
    <div className='good__bye' >
      <p>See You Next Class!</p>
    </div>
  )
}

export default GoodBye
