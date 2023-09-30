import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import {theProduct} from './Products';
import Pymes from './pages/Pymes/Pymes';
import PymeProducts from './pages/PymeProducts/PymeProducts';

function App() {


  return (
    <HashRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home theProduct={theProduct} />} />
        <Route path='/product/:id' element={<ProductDetail theProduct={theProduct} />} />
        <Route path='/pymes' element={<Pymes theProduct={theProduct} />}/>
        <Route path='/pyme/:ownerId' element={<PymeProducts theProduct={theProduct} />}/>
      </Routes>
    <Footer/>
    </HashRouter>
  );
}

export default App;
