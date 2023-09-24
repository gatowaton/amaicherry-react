import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {

  const products = [
    {
      id: 1,
      title: "Producto 1",
      categoria: "Electrónica",
      marca: "Marca 1",
      precio: 99.99,
      descripcion: "Descripción del Producto 1",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 2,
      title: "Producto 2",
      categoria: "Ropa",
      marca: "Marca 2",
      precio: 49.99,
      descripcion: "Descripción del Producto 2",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 3,
      title: "Producto 3",
      categoria: "Hogar",
      marca: "Marca 3",
      precio: 199.99,
      descripcion: "Descripción del Producto 3",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 4,
      title: "Producto 4",
      categoria: "Electrónica",
      marca: "Marca 1",
      precio: 149.99,
      descripcion: "Descripción del Producto 4",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 5,
      title: "Producto 5",
      categoria: "Ropa",
      marca: "Marca 2",
      precio: 29.99,
      descripcion: "Descripción del Producto 5",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 6,
      title: "Producto 6",
      categoria: "Hogar",
      marca: "Marca 3",
      precio: 79.99,
      descripcion: "Descripción del Producto 6",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 7,
      title: "Producto 7",
      categoria: "Electrónica",
      marca: "Marca 1",
      precio: 129.99,
      descripcion: "Descripción del Producto 7",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 8,
      title: "Producto 8",
      categoria: "Ropa",
      marca: "Marca 2",
      precio: 39.99,
      descripcion: "Descripción del Producto 8",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 9,
      title: "Producto 9",
      categoria: "Hogar",
      marca: "Marca 3",
      precio: 149.99,
      descripcion: "Descripción del Producto 9",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
    {
      id: 10,
      title: "Producto 10",
      categoria: "Electrónica",
      marca: "Marca 1",
      precio: 199.99,
      descripcion: "Descripción del Producto 10",
      image:"https://i.pinimg.com/564x/f6/6b/56/f66b56a7c078507938fcf2fb10ea7a10.jpg",
    },
  ];
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/amaicherry-react' element={<Home products={products} />} />
        <Route path='/amaicherry-react/product/:id' element={<ProductDetail products={products} />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
