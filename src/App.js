import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { products } from './Products';

function App() {


  return (
    <HashRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='/product/:id' element={<ProductDetail products={products} />} />
      </Routes>
    <Footer/>
    </HashRouter>
  );
}

export default App;
