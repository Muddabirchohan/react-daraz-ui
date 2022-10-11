import React, { useEffect, useState } from 'react'

export default function EditTodo({onadd,editItem,onCancel,setEdit,onUpdate}) {

  
    
  const [value,setValue] = useState(editItem)



    const onchange = (e) => {
        setValue(e.target.value)
    }

    const updateItem = () => {
        onUpdate(value)
        setValue("")
    }


  return (
    <div>
    <input type="text" onChange={onchange} value={value} />
    <button onClick={updateItem}>  submit </button>
    <button onClick={onCancel}>  cancel </button>
    </div>
  )
}
