import React from 'react'
import "./Home.css"
import ProductsCard from '../../components/ProductsCard/ProductsCard'




function Home({products}) {

    return (
        <div className='page'>
            <h1>Lista de Productos</h1>
            <ProductsCard products={products}/>
            <div className='pageback'>
                <h1>sadsa</h1>
            </div>
        </div>
    )
}

export default Home