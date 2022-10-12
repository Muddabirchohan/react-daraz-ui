import React from 'react';
import logo from "./../../images/logo_daraz.png";
import download from "./../../images/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

library.add(faSearch, faCartShopping);


export default function SubHeader() {
  return (
    <div className='main-content'>

    <div className="logo">
        <img src={logo} width="150px" />
    </div>
    

    <div>
        <input type="text" placeholder="search in daraz"/>
        <span style={{fontsize: "48px", backgroundColor: "orange",display:"inline-block",height: "44px",padding: "10px",color: "white"}}>
        <FontAwesomeIcon icon="search" size='lg' />

        </span>
       
    </div>

    <div className='cart'>
        <span style={{marginLeft: "5px",display:"inline-block",padding: "10px"}}> 
        <Link to={`/cart`}>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='lg' />
        </Link>
        </span>
    </div>

    <div className='download'>
        <img src={download} width="200px" />
    </div>

</div>
  )
}
