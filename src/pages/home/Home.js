import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"




function Home({products}) {

    return (
        <div className='page'>
            <h1>Lista de Productos</h1>
            <div className='card-container'>
                {products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Categoría: {product.categoria}</p>
                        <p>Marca: {product.marca}</p>
                        <p>Precio: ${product.precio}</p>
                        <p>Descripción: {product.descripcion}</p>
                        <Link to={`/product/${product.id}`}>
                            <button>Ver Detalles</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home