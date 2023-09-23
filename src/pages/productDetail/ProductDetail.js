import React from 'react'
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
    let { id } = useParams();
  
    // Convertir el ID de la URL a un número entero
    const productId = parseInt(id);
  
    // Buscar el producto en la lista por su ID
    const product = products.find((product) => product.id === productId);
  
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  
    return (
      <div>
        <h1>Detalles del Producto</h1>
        <h2>{product.title}</h2>
        <p>Categoría: {product.categoria}</p>
        <p>Marca: {product.marca}</p>
        <p>Precio: ${product.precio}</p>
        <p>Descripción: {product.descripcion}</p>
      </div>
    );
  }

export default ProductDetail