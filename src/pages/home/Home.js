import React from 'react'
import "./Home.css"
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import HomeSlider from './HomeSlider'




function Home({theProduct}) {

    return (
        <div className='page'>
            <HomeSlider/>
            <h1>Lista de Productos</h1>
            <ProductsCard theProduct={theProduct}/>
        </div>
    )
}

export default Home