import React from 'react';
import CartWitgets from "../CartWidgets/CartWidgets"
import BrandLogo from "../../assets/logo.png"
import "../../components/styles.css"



export const Navbar = () => {
    return(
        <nav className = "container" >
            <div className='nav__brand'>
              <img src={BrandLogo} alt='Brand logo'/>
            </div>
            <ul className="container ">
                <li>
                    <button className='nav__link' href='#'>About us</button>
                </li>
                <li>
                    <button className='nav__link' href='#'>Buy</button>
                </li>
                <li>
                    <button className='nav__link' href='#'>Contact</button>
                </li>
            </ul>

            <CartWitgets/>
        </nav> 
        );
}

export default Navbar;