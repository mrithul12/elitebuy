import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { AlignJustify, Facebook, Instagram, Linkedin, ShoppingBag, X } from 'lucide-react'
const Header = () => {

    const [toggle,setToggle] = useState(false)
  return (
    <div className='header container-fluid d-flex justify-content-between align-items-center position-relative'>
        <div className="header-list-start d-flex align-items-center gap-4">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        
        <div className="header-list d-none d-sm-block ">
            <ul className='d-flex gap-4 m-0 list-unstyled '>
                <li>Home</li>
                <li>Shope</li>
                <li>About Us</li>
                <li>Blog</li>
            </ul>
        </div>
       
        </div>
      
        <div className="header-list d-flex">
            <ul className='d-flex m-0 list-unstyled gap-3 pe-4'>
                <li>Login</li>
               <li><ShoppingBag /></li> 
            </ul>
           
        <AlignJustify onClick={()=>setToggle(true)} className='d-sm-none d-block'/>
        

        </div>
       <div className={`togglebar d-sm-none ${toggle ? "active" : ""}`}>
            <ul className='m-0 list-unstyled '>
                <li>Home</li>
                <li>Shope</li>
                <li>About Us</li>
                <li>Blog</li>
            </ul>
            <X onClick={()=>setToggle(false)} className='close' />
                <div className='social'>
                    <Instagram />
                    <Facebook />
                    <Linkedin />


                </div>
        </div>
        

    </div>
  )
}

export default Header