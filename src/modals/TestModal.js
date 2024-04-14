import React, { useContext, useState } from 'react'
import '../App.css';
import TodoContext from '../context/TodoContext'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const TestModal = ({ handleClose,show }) => {
 
  const {setTodos} = useContext(TodoContext)
  const [taskName,setTaskName] = useState('');
  const [taskDesc,setTaskDesc] = useState('');
 const handleSubmit =(event) => {
   event.preventDefault();
    
     setTodos(items => [
        ...items,
        {
           id:taskName,
           task: taskName,
           description: taskDesc
        }
     ]);
     setTaskName('');
     setTaskDesc('');
    handleClose()
     console.log('submit for create task');
 }


  return (
    <>
     <div  className='modal-container'>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body> <form onSubmit={handleSubmit}>
     <input type="text" name="createTaskName" placeholder='Enter Task  Name' value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
     <textarea name='createTaskDescription' placeholder='Enter  task Description' value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}/>
     <button type="submit" className='create'>Submit</button>
    </form></Modal.Body>
       
      </Modal>
     </div>
    </>
  );
};

export default TestModal;