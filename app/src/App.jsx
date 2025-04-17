import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import './App.css';
// I imported the pages
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import Basket from './Pages/Basket/Basket';
// Navbar
import Navbar from './Components/Navbar/Navbar';


export const AppContext = createContext();

function App() {
  const [addToCard, setAddToCard] = useState(0);
  const [addProduct, setAddProduct] = useState([]);
  return (
    <div className='app'>
      <BrowserRouter>
        <AppContext.Provider value={{
          addToCard, setAddToCard,
          addProduct, setAddProduct
        }}>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
