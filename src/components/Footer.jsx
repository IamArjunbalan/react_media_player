import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='bg-dark' style={{ width:'100%', height: '420px'}}>
        <Row className='p-5'>
          <Col md='4'>
            <h4> <i className="fa-solid fa-music  me-3" style={{color:'#dbe1e1'}} ></i>{' '}
        EasyPlay</h4>
        <p style={{textAlign:'justify'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </Col>
          <Col md='4' className='d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none'}}>Landing page</Link>
            <Link to={'/home'} style={{textDecoration:'none'}}>Home</Link>
            <Link to={'/watch-history'} style={{textDecoration:'none'}}>Watch History</Link>
          </Col>
          <Col md='4' className=' d-flex flex-column'>
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none'}}>Fontawesome</Link>
          </Col>
        </Row>
        <p className='text-center mt-3 '>Copyright  © 2023 React Bootstrap. Built with Docusaurus</p>
      </div>
    </div>
  )
}

export default Footer