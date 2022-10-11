import React, { useContext, useState } from 'react'
import { CoutnerCountext } from '../context/countercontext'
import EditTodo from './editTodo'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default function Todo() {

    //counter with context api
    const counterC = useContext(CoutnerCountext);
    const {count , setcount} = counterC;


    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState({
        name: "",
        id: ""
    });



    const onAdd = (item) => {

        setTodos([...todos, {name: item, id :Math.random()}])
    }

    const removeTodo = (name) => {
        const filtered = todos.filter(item => item.name !== name)
        setTodos(filtered)
    }

    const eidTodo = ({name,id}) => {
        setEdit(true)
        setEditItem(editItem=>{
            return {
                 ...editItem, 
                 name : name,
                 id: id
            }
        })
    }

    const onCancel = () => {
        setEdit(false)
    }

    const onUpdate = (name) => {
     
        const filteredTodos = todos.filter(item =>{
            if(item.id === editItem.id){
                item.name = name
            }
            return item
        })

        setTodos(filteredTodos)
        setEdit(false)
        
    }



    return (
        <div>todo

            <button onClick={()=>setcount(count+1)}> count </button>

            {edit && editItem ?
            
                <EditTodo editItem={editItem.name} onCancel={onCancel} key={editItem.name} onUpdate={onUpdate}/> : <TodoForm onadd={onAdd} />
            }

            {todos.map((item, index) => {
                return (
                    <TodoList todo={item} index={index} removeTodo={removeTodo} onEdit={eidTodo} />
                )
            })}


        </div>
    )
}
