import React from 'react'
import { Row,Col, Card } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'



function Landing() {
  const navigateByUrl=useNavigate()
  const clickNavigate=()=>{
    navigateByUrl('/home')
  }

  return (
    <div>
      <Row className='mt-5 mb-5 align-item-center'>
        <Col></Col>
        <Col md='4'>
        <h2 className='mb-3'>Welcome to <span className='text-danger'>EasyPlay.com</span></h2>
        <p className='tect-dark' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at mi sit amet tellus vehicula efficitur et ac quam. Etiam dignissim orci ante, ut rutrum urna molestie ac. Cras dignissim turpis sed mauris rhoncus lacinia. Donec ante lorem, varius vitae lorem quis, accumsan sagittis dui. Vestibulum magna tellus, imperdiet eu condimentum id, pharetra et enim. Donec quis nibh at nunc suscipit sagittis. In nec malesuada nibh. Morbi tincidunt vehicula egestas. Sed rutrum porttitor mi, eget pharetra lacus convallis feugiat.</p>
        <button onClick={clickNavigate} className='btn btn-success'>Get started</button>

        </Col>
        <Col></Col>
        <Col md='6'>
          <img className='img-fluid' src="https://images.vexels.com/media/users/3/150846/isolated/preview/a77bce5e752802277f78088150b16923-audio-headphones-icon-music.png" alt="banner" />


        </Col>
      </Row>

      <div className='mt-5 mb-5 ms-2 d-flex flex-column justify-content-center w-100' >
        <h2 className='text-center'>Features</h2>
        <div className='d-flex justify-content-around'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} src="https://spectrumam.com/wp-content/uploads/2017/12/lg.dual-gear-loading-icon.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height={'300px'}src="https://cdn.dribbble.com/users/3191392/screenshots/6446992/dribb.gif" />
      <Card.Body>
        <Card.Title>Upload Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height={'300px'}src="https://cdn-icons-gif.flaticon.com/11259/11259493.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>

      </div>

      <div className='border p-5 border-success rounded  shadow mx-5 mt-5 mb-5'>
        <Row>
          <Col>
          <h1> simple,Fast and Secure</h1>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis consectetur. Donec vulputate est a ligula fringilla sollicitudin. Vestibulum turpis nulla, pellentesque sed semper ac, imperdiet quis velit. Maecenas lobortis, risus sed interdum ultricies, mi purus pretium lectus, id ullamcorper dolor ante et purus. Etiam blandit odio velit, sed lobortis tellus sagittis non. Nam lobortis purus tristique maximus rhoncus. Duis convallis felis quis augue convallis tincidunt. Proin elementum neque mauris, eu rutrum mauris scelerisque non. Nam sed pharetra dolor. Nullam efficitur lectus ac est posuere, nec bibendum velit ultrices. Pellentesque at ex quis libero auctor condimentum. Aliquam non velit et enim ultrices maximus. Etiam blandit varius orci, id ultricies orci mollis nec.</p>
          </Col>

          <Col className='p-3'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/91BUM3WhCfo?si=hqFGN4CTnbjSuT5u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
          

        
      </div>

      
    </div>
  )
}

export default Landing