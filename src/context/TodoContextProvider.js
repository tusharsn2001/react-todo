import React, {  useState,useEffect } from 'react'
import TodoContext from './TodoContext'


const TodoContextProvider = ({ children }) => {
//    const [todos,setTodos] = useState([])
    // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
    return (
        <>
            <TodoContext.Provider value={{ todos,setTodos }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export default TodoContextProvider