import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div> 
      <Navbar className="navbar navbar-expand-lg bg-dark">
    <Container>
      
      <Navbar.Brand >
      <Link to={'/'} style={{textDecoration:'none'}}>
     <i className="fa-solid fa-music fa-bounce me-3" style={{color:'#dbe1e1'}} ></i>{' '}
        EasyPlay
        </Link>
      </Navbar.Brand>
      
    </Container>
  </Navbar></div>
  )
}

export default Header