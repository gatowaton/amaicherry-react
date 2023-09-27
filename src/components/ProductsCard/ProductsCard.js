import React from 'react'
import { Link } from "react-router-dom";
import "./ProductsCard.css"

function ProductsCard({products}) {
  return (
    <div className='card-container'>
    {products.map((product) => (
        <div className='product-card' key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Categoría: {product.categoria}</p>
            <p>Marca: {product.marca}</p>
            <p>Precio: ${product.precio}</p>
            <Link to={`/product/${product.id}`}>
                <button className='learn-more'>Ver Detalles</button>
            </Link>
        </div>
    ))}
</div>
  )
}

export default ProductsCard