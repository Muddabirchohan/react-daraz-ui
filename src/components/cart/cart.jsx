import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useContext, useEffect, useState } from 'react'
import { Card, Badge, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CoutnerCountext } from '../../context/countercontext';



export default function Products() {



    const productsC = useContext(CoutnerCountext);
    const {values } = productsC;




    // if (values.products.productsLoader) {
    //     return <div className='loader'>
    //         <Spinner animation="border" variant="primary" />
    //     </div>
    // }


    return (

        <div className='products-parent'>

        <div> total : {values.products.totalAmount} </div>

            {values.products.products && values.products.products.map((item, index) => {
                const contractedTitle = item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title
                return (
                    <Link to={`/detail/${item.id}`}>
                        <Card className={index == 3 ? "sold-out" : ""}>
                            <p> <img src={item.images[0]} width="220px" height="210px" /> </p>
                            <p> {contractedTitle} </p>
                            <p> ${item.price} </p>
                            {index == 3 && <p> sold out </p>}
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}