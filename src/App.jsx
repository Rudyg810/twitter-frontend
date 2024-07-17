import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Footer from './components/Footer';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/new-products" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/single-product" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
