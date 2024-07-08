import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faSearch, faHamburger} from '@fortawesome/free-solid-svg-icons';

import data from "../data.json";
// import { FaSearch, FaHamburger } from "react-icons/fa";
const {header} = data;

export const Header =()=>{
 return(
    <header className="header">
       <div className="container">

           <div className="header__wrapper">
            
           <a>
            <img src={header.logo.src} alt={header.logo.alt}/>
        </a>
        <nav className="nav">
            {header.navLinks.map((item, index)=>(
                <ul key={index} className="nav__list">
                    <li className="nav__item">
                    <a  href={item.url} className="nav__link" >
                    {item.text}
                </a>
                    </li>
                </ul>
                
            ))}
        </nav>
        <div className="search-cart">
        <form className="header__search">
           <input className="header__input" type="text" placeholder={header.search.placeholder} />
           <button> <FontAwesomeIcon icon={faSearch} /></button>
        </form>
        <FontAwesomeIcon className="header__toggle" icon={faHamburger} />
        <a href={header.cart.url} className="cart-content">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          <span className="cart-no">0</span>
        </a>
      </div>


           </div>
       </div>
    </header>
 )
}