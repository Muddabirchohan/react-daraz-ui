import React, { useState } from 'react'

export default function TodoForm({onadd}) {
    const [value,setValue] = useState("")


    const onchange = (e) => {
        setValue(e.target.value)
    }

    const onsubmit = (e) => {
        onadd(value)
        setValue("")
    }


  return (
    <div>
    <input  type="text" onChange={onchange} value={value}/>
    <button onClick={onsubmit}>  submit </button>
    </div>
  )
}
