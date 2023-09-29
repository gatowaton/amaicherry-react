import React from 'react'
import { Link } from "react-router-dom";
import "./ProductsCard.css"

function ProductsCard({ theProduct }) {
  return (
<div >
      {theProduct.map((ownerData, index) => (
        <div className='card-container' key={index}>
          {/* <p>Social: {ownerData.social}</p> */}
          {ownerData.products.map((product) => (
            <div className='product-card' key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{ownerData.owner}</p>
              <strong>${product.price}</strong>
              <Link to={`/product/${product.id}`}>
                <button className='learn-more'>Ver Detalles</button>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>

  )
}

export default ProductsCard