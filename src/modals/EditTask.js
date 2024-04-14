import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import TodoContext from '../context/TodoContext';

const EditTask = ({ handleClose, title, description, show }) => {
  const { setTodos } = useContext(TodoContext);
  const [taskName, setTaskName] = useState(title); // Initialize with title
  const [taskDesc, setTaskDesc] = useState(description); // Initialize with description

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the todo with new values
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === title // Assuming title is unique identifier for todo
          ? { ...todo, task: taskName, description: taskDesc }
          : todo
      )
    );

    handleClose();
    console.log('Submit for update task');
  };
 
  return (
    <div className='modal-container'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='updateTaskName'
              placeholder='Update Task Name'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <textarea
              name='updateTaskDescription'
              placeholder='Update Task Description'
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Update
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
