import React, {useState} from 'react'
import TodoSkjema from './TodoSkjema'
import Todo from './Todo';


function TodoListe() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo =(todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return; 
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
   };

     const removeTodo = id => {
         const removeArr = [...todos].filter(todo => todo.id !== id);

         setTodos(removeArr);
     };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
        <p> <span role="img" aria-label="movie-emojis">🎬 🎞️</span></p>
         <h1>Karantenelista</h1>   
         <TodoSkjema onSubmit={addTodo} />
         <Todo 
         todos={todos}
         completeTodo={completeTodo}
         removeTodo={removeTodo}
         updateTodo={updateTodo}
         />
        </div>
    );
}

export default TodoListe;
