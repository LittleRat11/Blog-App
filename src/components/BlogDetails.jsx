import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import { api } from '../api';
import { reducer,initialState } from '../reducer';
import { actionTypes } from '../reducer/actionTypes';
import { Card, Col, Container, Row } from 'react-bootstrap';


const BlogDetails = () => {
    const {blogId} = useParams();
    const [state,dispatch] = useReducer(reducer,initialState);

    const selectBlog = async () => {
        const res = await api.get(`/blogs/${blogId}`)
        dispatch({type:actionTypes.SELECTED_BLOG,payload:res.data})
        // console.log(res.data)
    }
    useEffect(() => {
        selectBlog();
    },[blogId])
  return (
    <Container>
        <Row>
            <Col md="8" style={
                {
                   
                    width:'auto',
                    margin:'100px auto'
                }
            }>
                <Card>
                    <Card.Header>
                        {state.blog.title}
                    </Card.Header>
                    <Card.Body>
                        {state.blog.description}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default BlogDetails
