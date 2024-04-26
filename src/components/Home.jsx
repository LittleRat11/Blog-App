import React, { useReducer,useEffect, useState } from 'react'
import Blog from './Blog'
import { Container,Row,Col } from 'react-bootstrap'
import { initialState, reducer } from '../reducer'
import { api } from '../api'
import { actionTypes } from '../reducer/actionTypes'
import HashLoader from "react-spinners/HashLoader";
const Home = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const [isLoading,setLoading] = useState(false)
    const fetchBlog = async () => {
        setLoading(true)
        const res = await api.get('/blogs')
                .catch((e) => console.log(e.message));
        // console.log(res.data)

        dispatch({type:actionTypes.FETCH_BLOGS,payload:res.data})
        setLoading(false)
    }
    useEffect(() => {
        fetchBlog()
    },[])
  return (
    <Container fluid className='mt-5'>
        <Row>
            {
                isLoading ? 
                <HashLoader color="#36d7b7" style={
                    {
                        margin:'100px auto'
                    }
                }/>
                :
                state.blogs.map((blog) => (
                    <Col key={blog.id} lg="3"  xs md="6" className='my-3'>
                        <Blog blog={blog} />
                    </Col>
                    ))
            }
            
           
        </Row>
    </Container>
  )
}

export default Home
