import React, { useReducer, useState } from 'react'
import { Col, Container, Row,Card,Form,Button } from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import { api } from '../api';
import { useNavigate } from 'react-router';
import { initialState, reducer } from '../reducer';
import { actionTypes } from '../reducer/actionTypes';
const { v4: uuidv4 } = require('uuid');

const AddForm = () => {
  const naviGate = useNavigate();
  const [isLoading,setLoading] = useState(false);
  const {register,handleSubmit,watch,formState:{errors}} = useForm()
  const [state,dispatch] = useReducer(reducer,initialState);


  const onSubmit =async data => {
    setLoading(true)
    data = {
      id:uuidv4(),
      ...data
    }
    const response = await api.post('/blogs',data)
    dispatch({type:actionTypes.ADD_BLOG,payload:response.data})
    setLoading(false)
    naviGate('/')
    
    console.log(response)
  };
  return (
   <Container style={{ 
    marginTop:100
    }}>
     <Row md="8" className='mx-auto'>
        <Col>
          <Card>
              <Card.Header>
                  Add New Blog
              </Card.Header>
              <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" {...register("title",{required:true})} />
                  </Form.Group>
                  {
                    errors.title && <p className='text-danger' role='alert'>Title field is required</p>
                  }
                  <Form.Group className="mb-3" controlId="blog.description">
                    <Form.Label>description</Form.Label>
                    <Form.Control as="textarea" rows={3} {...register("description",{required:true})} />
                  </Form.Group>
                  {
                    errors.description && <p className='text-danger' role='alert'>Description field is required</p>
                  }
                  {
                    isLoading ? 
                    <Button variant='dark' type='submit' className='float-end' disabled>Add Blogs</Button>
                    :
                    <Button variant='dark' type='submit' className='float-end'>Add Blogs</Button>
                  }
              </Form>
              </Card.Body>
          </Card>
        </Col>
     </Row>
   </Container>
  )
}

export default AddForm
