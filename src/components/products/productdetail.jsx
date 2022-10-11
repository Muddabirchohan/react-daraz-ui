import React, { useEffect, useState } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import "./product-detail.css";
import logo from "./../../images/logo_daraz.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import download from "./../../images/download.png"
import SimpleSlider from '../carousel/carousel';
import Products from '../products/products';
import { Card, Badge, Breadcrumb, Button, ButtonGroup } from 'react-bootstrap';
import { faSearch, faCartShopping, faLocation, faHandshake, faCashRegister, faShare, faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import slider1 from "./../../images/slider1.png"
import slider2 from "./../../images/slider2.jpg"
import Header from '../header/header';
import SubHeader from '../main-component/sub-header';
import Dropdown from 'react-bootstrap/Dropdown';





library.add(faSearch, faCartShopping, faLocation, faHandshake, faCashRegister, faShare, faHeart);


export default function Productdetail() {

    const params = useParams();


    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState({})
    const [categories, setCategories] = useState([])



    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .catch(ex => console.log(ex));

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])



    const settings = {
        customPaging: function (i) {
            return (
                <div className='custom-image'>  
                    <img src={product.images[i]} className="parent-image" width="30px" height="40px" />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    if (Object.keys(product) == 0) {
        return "loading..."
    }

 
    return (

        <div>
            <br />
            <SubHeader />
            <br />

            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {categories && categories.map(item => {
                        return <Dropdown.Item href={`#${item}`}> {item} </Dropdown.Item>
                    })}

                </Dropdown.Menu>
            </Dropdown>


            <div className='parent-product-detail'>
                <div className="breadcrumbs">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>


                <div className="main-content-details">

                    <div className="img-container">
                        {/* <img src={product.image} height="100px" /> */}
                        <Slider {...settings}>
                            <div>
                                <img src={product.images[0]} width="380px" height="200px" />
                            </div>
                            <div>
                                <img src={product.images[1]} width="380px" height="200px" />
                            </div>
                            <div>
                                <img src={product.images[2]} width="380px" height="200px" />
                            </div>
                            <div>
                                <img src={product.images[3]} width="380px" height="200px" />
                            </div>
                            <div>
                                <img src={product.images[4]} width="380px" height="200px" />
                            </div>
                        </Slider>


                    </div>

                    <div className="detail-section">
                        <p> {product.title} </p>
                        <div className='share'>

                            <div>

                                <div className='icons-share'>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span> 3 ratings </span>
                                    <span>
                                        <FontAwesomeIcon icon="fa fa-share" size="1x" />
                                        <FontAwesomeIcon icon="fa fa-heart" size="1x" />

                                    </span>
                                </div>
                            </div>


                        </div>

                        <div className='brand'>
                            <span> Brand |</span>
                            <span> More Kitchen Utensils from No Brand</span>
                        </div>


                        <div className="price">
                            <p> Rs.{product.price} </p>
                            <p>
                                <span> Rs.200 </span>
                                <span>  10%</span>

                            </p>
                        </div>

                        <div className='quantity'>
                            <span> Quantity </span>
                            <span>
                                <ButtonGroup>
                                    <Button variant="light" onClick={() => setCounter(counter - 1)}>  -</Button>
                                    <p> {counter} </p>
                                    <Button variant="light" onClick={() => setCounter(counter + 1)}> +</Button>
                                </ButtonGroup>

                            </span>

                        </div>

                        <div className="buy-buttons">
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="danger" className='buy-now'> Buy Now </Button>
                                <Button variant="primary" className='add-to-cart'>Add to cart </Button>
                            </ButtonGroup>
                        </div>
                    </div>



                    <div className="others">
                        <h5> Delivery </h5>
                        <p>
                            <span>
                                <FontAwesomeIcon icon="fa fa-location" size="1x" />
                            </span>
                            Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                        </p>
                        <hr />
                        <p>
                            <span>

                                <FontAwesomeIcon icon="fa fa-handshake" size="1x" />
                            </span>

                            Standard Delivery
                            {/* <p> 3-4 days delivery </p> */}
                        </p>
                        <hr />
                        <p>
                            <span>
                                <FontAwesomeIcon icon="fa fa-cash-register" size="1x" />
                            </span>

                            Cash on Delivery Available
                        </p>

                        <h5> Services </h5>
                        <p>
                            7 days return
                        </p>
                        <p> Change of mind is not applicable
                        </p>
                        <p>
                            Warranty not available
                        </p>



                    </div>

                </div>


            </div>
        </div>

    )
}
