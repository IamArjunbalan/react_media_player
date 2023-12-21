import React, { useState } from 'react'
import { Row,Col, ToastContainer } from 'react-bootstrap'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import { Link } from 'react-router-dom'



function Home() {
  const[resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  return (
    <div>
      <h2>All videos
        <Link  style={{float:'right',fontSize:'25px', textDecoration:'none'}}  to={'/watch-history'}>Watch History</Link>


      </h2>
      <Row className='mx-5 mt-5 mb-5 p-3'>
        <Col md='2'>
          <Add changeResState={changeResState}/>

          
        </Col>
        <Col md='6'>
          <View resState={resState}/>

           
        </Col>
        <Col md='4'>

          <Category/>
        </Col>
      </Row>
      <ToastContainer/>

    </div>
  )
}

export default Home