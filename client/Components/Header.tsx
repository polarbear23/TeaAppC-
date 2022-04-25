import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { API_URL } from '../config';

interface StateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
  showRegisterForm: boolean;
  showLoginForm: boolean;
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OrderProduct {
  quantity: number;
}

const Header = (props: StateProps) => {
  const { showRegisterForm, showLoginForm, setShowRegisterForm, setShowLoginForm, cartQuantity, setCartQuantity, isLoggedIn, setIsLoggedIn } = props;

  useEffect(() => {
    localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [showRegisterForm, showLoginForm]);

  const handleClickRegister = (): void => {
    setShowRegisterForm(true);
  };

  const handleClickLogin = (): void => {
    setShowLoginForm(true);
  };

  const handleClickLogout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCartQuantity(0); //reset cart
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const getOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch(API_URL.ORDER, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      const result = await res.json();
      const currentOrder = result.data[result.data.length - 1]; //set current order to the last one that exists
      if (currentOrder.orderProducts.length > 0) {
        const orderProductsQuantity = currentOrder.orderProducts.reduce((a: OrderProduct, b: OrderProduct) => {
          return { quantity: a.quantity + b.quantity };
        });
        console.log(orderProductsQuantity.quantity);
        setCartQuantity(orderProductsQuantity.quantity);
      }
    };
    getOrders();
  }, [isLoggedIn, setCartQuantity]);

  return (
    <header className="header">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src="/images/logo.png" alt="logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link className="navbar-item" to={'/'}>
            <li>Home</li>
          </Link>
          <Link className="navbar-item" to={'/aboutus'}>
            <li>About us</li>
          </Link>
          <Link className="navbar-item" to={'/store'}>
            <li>Store</li>
          </Link>
        </ul>
        <ul className="navbar-register-login-cart">
          {!isLoggedIn && (
            <li className="navbar-item navbar-register-login-text" onClick={handleClickRegister}>
              Register
            </li>
          )}
          {!isLoggedIn && (
            <li className="navbar-item navbar-register-login-text" onClick={handleClickLogin}>
              Login
            </li>
          )}
          {isLoggedIn && (
            <li className="navbar-item navbar-register-login-text" onClick={handleClickLogout}>
              Log Out
            </li>
          )}
          <Link className="navbar-item-cart" to={'/cart'}>
            <li>
              <img src="/images/cart.png" className="navbar-cart" alt="" />
              <span className="cart-number">{cartQuantity === 0 ? '' : cartQuantity}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
