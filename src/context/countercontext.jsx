import React, { createContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { reducer } from "./productsReducer";

export const CoutnerCountext = createContext();


export const CounterContextProvider = ({ children }) => {

    const [count, setcount] = useState(0);
    // const [products, setProduct] = useState([])

    const [productsLoader, setProductLoader] = useState(false)

    const initialState = {
        products: [],
        productsLoader: false,
        cart: []
    };

    const [products, dispatch] = useReducer(reducer, initialState);



    const params = useParams();


    useEffect(() => {

        const abortCont = new AbortController()

        setProductLoader(true)
        fetch('https://dummyjson.com/products',{
            signal: abortCont.signal
        })
            .then(res => res.json())
            .then(json => {
                
                dispatch({
                    type :"LOAD-PRODUCTS",
                    payload: true
                })

                dispatch({
                    type :"GET-PRODUCTS",
                    payload: json
                })

                dispatch({
                    type :"LOAD-PRODUCTS",
                    payload: false
                })

            })
            .catch(ex =>{
                if(ex.name == "AbortError"){
                    console.log("request aborted successfully")
                }                
            })


            return () => {
               abortCont.abort()
            }
    }, [])


    const addToCart = (item) => {
        dispatch({
            type :"ADD-TO-CART",
            payload: item
        })
    }

    



    const values = {
        count,
        products,
        setcount,
        addToCart
    }

    return (
        <CoutnerCountext.Provider value={{values}}>
            {children}
        </CoutnerCountext.Provider>
    )
}