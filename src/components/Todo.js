import React, {useState} from 'react'
import TodoSkjema from './TodoSkjema'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

/*Lage ulike funksjoner til appen. Lagre, fjerne, fullføre og oppdatere en "Todo"*/
function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const removeTodoEnter = (e,id) => {
        if(e.key === 'Enter'){
            removeTodo(id)
        }
    }

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }

    const setEditEnter = (e, o) => {
        if(e.key === 'Enter'){
            setEdit(o)
        }

    }
      
    if(edit.id) {
        return <TodoSkjema edit={edit} tabIndex="0" onSubmit={submitUpdate} />;
    }               

     /*Pakker inn samhandlingen mellom kolonner og valg i et div*/
    return todos.map((todo, index) => (

        
     <div className={todo.isComplete ? 'todo-row complete': 
    'todo-row'} tabIndex="0" key={index}>

   <div 
   onKeyUp={todo.id} 
   onClick={() => completeTodo(todo.id)}
   >
      {todo.text}
      </div>

      {/*react-icons, ikonene "exit" og "rewrite" i appen*/
      /*Man må huske å importere fra react-icons. 
      onClick legges til for at ikonet skal reagere når det trykkes på*/}
    
        
        <div className="icons">
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          onKeyUp={(e) => removeTodoEnter(e,todo.id)}
          className='delete-icon' tabIndex="0"
          />

        
          <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          onKeyUp={(e) => setEditEnter(e,{ id: todo.id, value: todo.text })}
          className='edit-icon' tabIndex="0"
          />   
     </div>
     </div>
    
    
    ));
}

export default Todo
