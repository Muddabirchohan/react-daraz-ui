import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useContext, useEffect, useState } from 'react'
import { Card, Badge, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CoutnerCountext } from '../../context/countercontext';



export default function Products() {

    const teams = ["pakistan", "india", "newzeland"]
    let matches = []

    for (let i = 0; i < teams.length; i++) {

        for (let j = 0; j < teams.length; j++) {

            if (teams[i] !== teams[j]) {

                const findWinner = [teams[i], teams[j]]

                const matchPlayed = {
                    first: teams[i],
                    seconnd: teams[j],
                    winner: findWinner[Math.round(Math.random())]
                }

                if (matches.length == 0) {
                    matches.push(matchPlayed)
                }

                matches.map(item => {
                    if (!(item.first.includes(teams[i]) || item.seconnd.includes(teams[j]) && item.first.includes(teams[j]) || item.seconnd.includes(teams[i]))) {
                        matches.push(matchPlayed)
                    }
                })
            }


        }

    }



    const anounceWinner = () => {
        let winners = []
        const winner = matches.map(item => item.winner);

        winner.map(item => {

            if (winners.length == 0) {
                winners.push({
                    name: item,
                    count: 1
                })
            }


            if(winners.find(winn => winn.name == item)){
                console.log("wiinners if",winners)

             const index =  winners.findIndex(win => win.name == item)
                winners[index].count+=1 
            } else {
                console.log("wiinners else",winners)

                winners.push({
                    name: item,
                    count: 1
                })
            }


        })

        return winners
    }

    console.log("announce", anounceWinner())



    const productsC = useContext(CoutnerCountext);
    const { values } = productsC;




    if (values.products.productsLoader) {
        return <div className='loader'>
            <Spinner animation="border" variant="primary" />
        </div>
    }


    return (

        <div className='products-parent'>


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