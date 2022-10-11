import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CoutnerCountext = createContext();


export const CounterContextProvider = ({ children }) => {

    const [count, setcount] = useState(0);
    const [products, setProduct] = useState([])

    const [productsLoader, setProductLoader] = useState(false)

    const params = useParams();

    useEffect(() => {

        setProductLoader(true)
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
                setProductLoader(false)
            })
            .catch(ex => setProductLoader(false))
    }, [])



    const values = {
        count,
        products,
        productsLoader,
        setcount
    }

    return (
        <CoutnerCountext.Provider value={values}>
            {children}
        </CoutnerCountext.Provider>
    )
}