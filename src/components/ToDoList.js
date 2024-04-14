import React, { useContext } from 'react'
import '../App.css'
import Cards from './Cards'
import todoContext from '../context/TodoContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ToDoList = () => {
  
  const {todos} = useContext(todoContext)

 
  return (
    <div className='task-container'>
      <Container>
      <Row>
    {todos.length > 0 ? todos.map((item,index) => (
        
          <Col sm={12} md={6} lg={4} xl={4} className='py-3' key={index}>
          <Cards title={item.task} description={item.description} id={item.id}/>
          </Col>
      
    
    )) : <h1 className='text-center text-light'>No Todos !!!!!</h1>}
      </Row>
      </Container>
  </div>
  )
}

export default ToDoList
