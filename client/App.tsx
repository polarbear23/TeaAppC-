import './styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './pages/homepage/Homepage';
import Register from './Components/globalForms/Register';
import Login from './Components/globalForms/Login';
import Store from './pages/store/Store';
import Cart from './pages/cart/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export interface Product {
  id: number;
  price: number;
  teaId: number;
}

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [cart, setCart] = useState<Product[]>([]);

  return (
    <BrowserRouter>
      <div>
        {showRegisterForm && <Register setShowRegisterForm={setShowRegisterForm} />}
        {showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
        <div className="App">
          <Header
            showRegisterForm={showRegisterForm}
            showLoginForm={showLoginForm}
            setShowRegisterForm={setShowRegisterForm}
            setShowLoginForm={setShowLoginForm}
            cartQuantity={cartQuantity}
            setCartQuantity={setCartQuantity}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Routes>
            <Route path="/" element={<Homepage setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />} />
            <Route path="/store" element={<Store setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />} />
            <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
