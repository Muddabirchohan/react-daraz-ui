import React from 'react'
import "./main-content.css"
import logo from "./../images/logo_daraz.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import download from "./../images/download.png"
import SimpleSlider from './carousel';
import Products from './products';

library.add(faSearch, faCartShopping);


export default function MainContent() {
    return (
        <main className='parent'>

            <div className='main-content'>
                <div className="log">
                    <img src={logo} width="150px" />
                </div>

                <div>
                    <input type="text" />
                    <span >
                        <FontAwesomeIcon icon="search" size='lg' />
                    </span>
                </div>

                <div className='cart'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='lg' />
                </div>

                <div className='download'>
                    <img src={download} width="200px" />
                </div>

            </div> 
            
            <div className='slider'> 
            <br/>
                <SimpleSlider/>
                </div>

            <div className="products">
                <Products/>
            </div>


        </main>
    )
}
