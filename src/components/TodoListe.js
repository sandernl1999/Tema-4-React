/*Importer og samhandling mellom de ulike komponentene*/
import React, {useState} from 'react'
import TodoSkjema from './TodoSkjema'
import Todo from './Todo';


function TodoListe() {
    const [todos, setTodos] = useState([])

    /*Legge til en/ny Todo/filmtittel*/
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text))  {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    /*Oppdatere en Todo/filmtittel*/
    const updateTodo =(todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text))  {
            return; 
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
   };

    /*Fjerne en Todo/filmtittel*/
     const removeTodo = id => {
         const removeArr = [...todos].filter(todo => todo.id !== id);

         setTodos(removeArr);
     };

   /*Fullføre en Todo/filmtittel, (trykke på tittelen)*/
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    /*Applikasjonen. Overskrift og de ulike funksjonene: Legge til,
     fullføre, fjerne og oppdatere*/
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
