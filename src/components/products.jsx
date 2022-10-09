import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export default function Products() {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
        
    },[])

  return (
    <div className='products-parent'>
        {data && data.map(item => {
            return(
                <Card> 
                    {/* <p> {item.title} </p>  */}
                    <p> <img src={item.image} width="200px" height="150px"/> </p> 
                                        <p> {item.title} </p> 

                    <p> {item.price} </p> 

                </Card>
            )
        })}
    </div>
  )
}
