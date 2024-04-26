import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const naviGate = useNavigate();
  return (
    <div className='w-full vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='fs-1 fw-bold text-center text-dark m-3'>Page not Found</h1>
        <Button  onClick={() => naviGate('/')}variant='danger'>Go Home</Button>
    </div>
  )
}

export default NotFound
