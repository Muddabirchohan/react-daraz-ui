import React from 'react'
import "./main-content.css"
import logo from "./../../images/logo_daraz.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import download from "./../../images/download.png"
import SimpleSlider from '../carousel/carousel';
import Products from '../products/products';
import { Card, Badge } from 'react-bootstrap';
import SubHeader from './sub-header';


library.add(faSearch, faCartShopping);


export default function MainContent() {
    return (
        <main className='parent'>
            <br /> 

            <SubHeader/>


            <div className='slider'>
                <br />
                <SimpleSlider />
            </div>

            <div className='badges'>

                <Badge bg="light" text="dark">
                    Mart
                </Badge>
                <Badge bg="light" text="dark">
                    Fashion
                </Badge>
                <Badge bg="light" text="dark">
                    Home & Decor
                </Badge>
                <Badge bg="light" text="dark">
                    Beauty
                </Badge>
            </div>

            <div className="products">
                <Products />
            </div>


        </main>
    )
}
