import React, { useContext, useState } from 'react'
import { CoutnerCountext } from '../context/countercontext';
import TodoForm from './todoForm'

export default function TodoList({ todo ,removeTodo,index ,onEdit}) {
    const counterC = useContext(CoutnerCountext);


    return (
        <div>
            <span> {todo.name} </span>
            <button onClick={()=>removeTodo(todo.name)}> x </button>
            <button onClick={()=>onEdit(todo)}> edit </button>
        </div>
    )
}