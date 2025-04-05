import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { AlignJustify, Facebook, Instagram, Linkedin, ShoppingBag, X } from 'lucide-react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='header container-fluid d-flex justify-content-between align-items-center position-relative'>
        {/* Left section: Logo + Menu */}
        <div className="header-list-start d-flex align-items-center gap-4">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          
          <div className="header-list d-none d-sm-block">
            <ul className='d-flex gap-4 m-0 list-unstyled'>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Right section: Auth + Cart + Mobile Menu Icon */}
        <div className="header-list d-flex align-items-center">
          <ul className='d-flex m-0 list-unstyled gap-3 pe-4'>
            <li>Login</li>
            <li><ShoppingBag /></li>
          </ul>

          <AlignJustify onClick={() => setToggle(true)} className='d-sm-none d-block menu-icon' />
        </div>
      </div>

      {/* Mobile Toggle Sidebar */}
      <div className={`togglebar d-sm-none ${toggle ? 'active' : ''}`}>
        <X onClick={() => setToggle(false)} className='close' />
        <ul className='m-0 list-unstyled mt-5 ps-3 d-flex flex-column gap-3'>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>

        <div className='social'>
          <Instagram />
          <Facebook />
          <Linkedin />
        </div>
      </div>
    </>
  );
};

export default Header;
