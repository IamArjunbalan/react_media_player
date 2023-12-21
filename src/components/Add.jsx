import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { addVideos } from '../services/allApis';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({changeResState}) {

  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    id:'',caption:'' , url:''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleVideoDetails=(e)=>{
    const {name,value}=e.target
    setVideo({...video,[name]:value})
  }
  console.log(video)

  const handleVideoUrl=(e)=>{
    const {name,value}=e.target
    if(value.includes("v=")){
      let index=value.indexOf("v=")
      let url=value.substring(index+2,index+13)
      let videoUrl=`https://www.youtube.com/embed/${url}`
      console.log(videoUrl)
      setVideo({...video,[name]:videoUrl})

    }
    
  }

  const uploadVideo=async()=>{
    const {id,caption,thumbnail,url}=video
    console.log(video)
    if(!id || !caption || !thumbnail || !url){
      toast.warning("please fill in the video details!!")
    }
    else{
      let response = await addVideos(video)
      console.log(response)
      if(response.status>=200 || response.status<300){
        changeResState()
        setShow(false)
        toast.success("New video uploaded")
      }
      else{
        toast.error("video upload failed")
      }
    }

  }



  return (
   <>
   <div className='btn' onClick={handleShow}>
    <i class="fa-solid fa-circle-plus"></i>

   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <FloatingLabel
        controlId="floatingID"
        label="videoID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="videoID" name='id' onChange={(e)=>handleVideoDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCaption" label="caption" className="mb-3">
        <Form.Control type="text" placeholder="video Caption" name='caption' onChange={(e)=>handleVideoDetails(e)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingImageUrl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Video Image URL"  name='thumbnail' onChange={(e)=>handleVideoDetails(e)}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingVideoUrl" label="Video URL" className="mb-3">
        <Form.Control type="text" placeholder="Youtube Video URL" name='url' onChange={(e)=>handleVideoUrl(e)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={uploadVideo} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
   </>
  )
}

export default Add