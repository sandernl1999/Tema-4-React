import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(''
     );

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        /*Setter tallet til 10 000 slik at sjangsen for å få samme ID blir liten*/ 
        props.onSubmit({
         id: Math.floor(Math.random() * 10000),
         text: input
        });

        setInput('');

    };

/*Innmat som vises utad. Buttons og placeholders som viser hvordan appen skal brukes */ 
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
           {props.edit ? (
            <>   
          <input
          type='text'
          placeholder='...'
          value={input}
          name='text'
          className='todo-input edit'
          onChange={handleChange}
          ref={inputRef}
          />
          <button className='todo-button edit'>Oppdater</button> 
          </>
           ) : (
           <>
          <input
          type='text'
          placeholder='Legg til film...'
          value={input}
          name='text'
          className='todo-input'
          onChange={handleChange}
          ref={inputRef}
          />
          <button className='todo-button'>Lagre</button>
          </>
        )}
        </form>
         );

             }


export default TodoForm;
