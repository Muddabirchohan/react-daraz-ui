import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useContext, useEffect, useState } from 'react'
import { Card, Badge, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CoutnerCountext } from '../../context/countercontext';
import "./cart.css"


export default function CartItem() {



    const productsC = useContext(CoutnerCountext);
    const {values } = productsC;

    return (

        <div >
        <div> total : {values.products.totalAmount} </div>

            {values.products.cart && values.products.cart.map((item, index) => {
                const contractedTitle = item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title
                return (
                    <div > 
                    <Link to={`/detail/${item.id}`}>
                        <Card  >
                            <span> <img src={item.images[0]} width="220px" height="210px" /> </span>
                            <span> {contractedTitle} </span>
                            <span> ${item.price} </span>
                            <span> {item.quantity} </span>

                            {index == 3 && <span> sold out </span>}
                        </Card>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}