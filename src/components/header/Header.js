import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../icons/bars-solid.svg';
import Close from '../../icons/times-solid.svg';
import CartIcon from '../../icons/shopping-cart-solid.svg';
import { DataContext } from '../../Context';
import './Header.css';

const Header = () => {
  const { cart } = useContext(DataContext);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="menu" onClick={() => toggleMenu()}>
        <img src={Menu} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">MINI</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? 'toggle' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>

          <li className="close" onClick={() => toggleMenu()}>
            <img src={Close} alt="" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
