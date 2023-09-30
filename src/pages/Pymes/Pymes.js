import React from 'react'
import "./Pymes.css"
import { Link } from 'react-router-dom'
import instagram from "../../img/instagramLogo.png"
import tiktok from "../../img/tiktokLogo.png"

function Pymes({ theProduct }) {
  return (
    <div className='page-pymes'>
      <h1>Propietarios</h1>
      <div className='pymes-owner-container'>
        {theProduct.map((ownerData, index) => (
          <div className='pymes-owner-card' key={index}>
            <img className='pymes-owner-logo' src={ownerData.logo} alt={ownerData.logo} />
            <h2>{ownerData.owner}</h2>
            <div className='pymes-owner-social'>
              <a href={ownerData.instagram} target='_blank' rel="noreferrer">
                <img src={instagram} alt={instagram} className='product-detail-social' />
              </a>
              <a href={ownerData.tiktok} target='_blank' rel="noreferrer">
                <img src={tiktok} alt={tiktok} className='product-detail-social' />
              </a>
            </div>

            <Link to={`/pyme/${ownerData.owner}`}>
              <button>ver productos</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pymes