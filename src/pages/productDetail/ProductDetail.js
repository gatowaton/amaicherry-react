import React from 'react'
import { useParams } from "react-router-dom";
import instagram from "../../img/instagramLogo.png";
import tiktok from "../../img/tiktokLogo.png";
import "./ProductDetail.css"

function ProductDetail({ theProduct }) {
  let { id } = useParams();

  // Encuentra el producto correspondiente en theProduct usando el ID
  let product = null;
  let owner = null;
  for (const ownerData of theProduct) {
    product = ownerData.products.find((product) => product.id === parseInt(id));
    if (product) {
      owner = ownerData; // Establece el propietario cuando encuentres el producto
      break; // Si encontramos el producto, salimos del bucle
    }
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='page-product-detail'>

      <div className='product-detail-block-1'>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-detail-block-2'>
        {owner && (
          <div className='product-detail-block-2-1'>
            <h2>Propietario: {owner.owner}</h2>
            <a href={owner.instagram} target='_blank' rel="noreferrer">
              <img src={instagram} alt={instagram} className='product-detail-social' />
            </a>
            <a href={owner.tiktok} target='_blank' rel="noreferrer">
              <img src={tiktok} alt={tiktok} className='product-detail-social' />
            </a>
          </div>
        )}
        <p>Precio: ${product.price}</p>
        <p>Descripción: {product.desc}</p>
      </div>

    </div>
  );
}

export default ProductDetail