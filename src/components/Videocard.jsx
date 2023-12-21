import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { ToastContainer,toast } from 'react-toastify';
import { addHistory, deletevideo } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';




function Videocard({video,delResUpdate,isCategory}) {
    const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let date=Date()
    let id=uuidv4()
    const {thumbnail,caption,url}=video

    let body={thumbnail,id,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
  }

const removeVideo=async(id)=>{
  console.log(id)
  let res=await deletevideo(id)
  if(res.status>=200 && res.status<300){
    toast.success("Video Deleted Successfully!!")
    delResUpdate()

  }
  else{
    toast.error("Deletion failed!!")
  }
}

const ondrag=(e,id)=>{
  // e.preventDefault()
  console.log("Target video id",id)
  e.dataTransfer.setData("videoid",id)
}

  return (
    <div>
        <Card style={{ width: '100%' }}>
      <Card.Img  onClick={handleShow} draggable onDragStart={(e)=>ondrag(e,video?.id)}  width={'100%'} height={'200px'} variant="top" src={video?.thumbnail}  alt="img"/>
      <Card.Body>
        {
          isCategory?"":
          <Card.Title>{video?.caption} <span className='btn  btn-sm' style={{float:'right'}} onClick={()=>removeVideo(video?.id)}>   <i  class="fa-solid fa-trash" style={{color: '#e61919'}}></i></span></Card.Title>

        }
        
        
      </Card.Body>
    </Card>

    <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="Creed - Motivation Training 2015 [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard