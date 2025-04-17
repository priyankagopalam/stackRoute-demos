import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './ProductList';
import Product from './Product';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
