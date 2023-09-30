import React from 'react'
import { useParams, Link } from 'react-router-dom';
import "./PymeProducts.css"

function PymeProducts({ theProduct }) {
    let { ownerId } = useParams();

    // Filtrar los productos del propietario correspondiente
    const ownerProducts = theProduct.find((ownerData) => ownerData.owner === ownerId);
    console.log("Propietario buscado:", ownerId);
    console.log("Datos del propietario:", ownerProducts);

    if (!ownerProducts) {
        return <div>Propietario no encontrado</div>;
    }
    return (
        <div className='page-products-by-owner'>
            <h1>Productos de {ownerProducts.owner}</h1>
            <div className='card-container'>
                {ownerProducts.products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{ownerProducts.owner}</p>
                        <strong>${product.price}</strong>
                        <Link to={`/product/${product.id}`}>
                            <button className='learn-more'>Ver Detalles</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PymeProducts