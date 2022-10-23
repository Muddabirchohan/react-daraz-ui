import React, { useEffect } from 'react'

export default function Primitives() {

    useEffect(() => {

        // const data = {
        //     name: "muddabir"
        // }
        // const objChange = (data) => {

        //     data.name = "chohan"
        //     return data
        // }
        // console.log(objChange(data)
        // )

                const name = "muddabir"

        const objChange = (name) => {

            name = "chohan"
            return name
        }
        console.log(objChange(name)
        )

    }, [])




    return (
        <div>P</div>
    )
}


