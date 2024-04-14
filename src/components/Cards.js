import React, { useContext } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
import EditTask from '../modals/EditTask';
import { Button } from 'react-bootstrap';
import TodoContext from '../context/TodoContext';
import { Trash2 ,Pencil} from 'lucide-react';


const Cards = ({title,description,id}) => {
  
  const {setTodos,todos} = useContext(TodoContext)
  const handleDelete = () =>{
    
    const updatedTodos = todos.filter(todo => todo.id !== id);
    // Update the state with the new array
    setTodos(updatedTodos);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 




  return (
    <>
  
     <Card
     bg='dark'
     key='Dark'
     text='white'
     style={{ width: '18rem' }}
     className="mb-2"
     
   >
   
     <Card.Body>
     
     
       <Card.Title>{title}</Card.Title>
       <Card.Text>
         {description}
       </Card.Text>
       <Card.Footer>
     
        <Button variant='danger' onClick={handleDelete} className='me-2 delete'> <Trash2 /></Button >
     
         <Button  variant='primary'  onClick={handleShow} className='update danger'><Pencil /></Button >
     </Card.Footer>

     </Card.Body>
   </Card>
   {show && (
        <EditTask handleClose={handleClose} title={title} description={description} show={show}/>
      )}
   </>
  )
}

export default Cards
