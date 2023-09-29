import React from 'react'
import "./Pymes.css"

function Pymes({theProduct}) {
  return (
    <div className='page-pymes'>
    <h1>Propietarios</h1>
      <ul>
        {theProduct.map((ownerData, index) => (
          <li key={index}>
            <h2>Propietario: {ownerData.owner}</h2>
            <p>Social: {ownerData.instagram}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pymes