import React from 'react'
import  { useState} from 'react';

import '../App.css'
import CreateTask from '../modals/CreateTask';
import { Container } from 'react-bootstrap';
// import TestModal from '../modals/TestModal';
const Header = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='header'>
    <Container className='d-flex justify-content-center'>
      <button className='create-task' onClick={handleShow}>Create Task</button>
      {show && (
        // <CreateTask onCancel={closeModal} />
        <CreateTask handleClose={handleClose} show={show}/>
      )}
    </Container>
    </div>
  )
}

export default Header
