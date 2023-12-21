import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal, ToastContainer } from 'react-bootstrap';
import { addCategory, deleteCategory, getCategories,getSpecificVideos, updatecategory } from '../services/allApis';
import { toast } from 'react-toastify';
import Videocard from '../components/Videocard'








function Category() {
  const [category,setCategory]=useState({
    id:'' ,categoryName:'' , allvideos:[]
  })
  const [show, setShow] = useState(false);
  const[catgories,setCategories]=useState([]) 

  const handleCategoryList=async()=>{
    const res=await getCategories()
    console.log(res.data)
    setCategories(res.data)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoCategory=(e)=>{
    const {name,value}=e.target
    setCategory({...category,[name]:value})
  }

  const uploadCategory=async()=>{
    const {id,categoryName}=category 
    if(!id || !categoryName ){
      toast.warning("please fill in details!!")
    }
    else{
      let response = await addCategory(category)
      console.log(response)
      if(response.status>=200 || response.status<300){
        setShow(false)
        toast.success("Category Uploaded")
        handleCategoryList()
      }
      else{
        toast.error("Failed to upload category")
      }
    }

  }

  useEffect(()=>{
    handleCategoryList()
  },[])

  
const removeCategory=async(id)=>{
  console.log(id)
  const res=await deleteCategory(id)
  console.log(res)
  if(res.status>=200 && res.status<300){
    toast.success("Category Deleted Successfully!!")
    handleCategoryList()

  }
  else{
    toast.error("Deletion failed!!")
  }
}

const dragOver=(e)=>{
  e.preventDefault()
  console.log("Dragging over category board !!")
}

const onDropHandle=async (e,id)=>{
  console.log("Drop Target category id:",id)
  let videoid=e.dataTransfer.getData("videoid")
  console.log("video ID",videoid);
  const video=await getSpecificVideos(videoid)
  console.log(video.data)

  let selectedCategory=catgories?.find(item=>item?.id===id)
  selectedCategory.allvideos.push(video.data)
  console.log(selectedCategory)
  const res=await updatecategory(id,selectedCategory)
  console.log(res)
  toast.success("video added to category")
  handleCategoryList()

}








  
  return (
    <>
    <div className='d-grid'>
      <button  onClick={handleShow} className='btn btn-secondary'>Add category</button>

    </div>

    {
      catgories.map(item=>(
        <div className='bg-light m-3 p-1 border border-danger shadow rounded' droppable
        onDragOver={e=>dragOver(e)} onDrop={(e)=>onDropHandle(e,item?.id)}>
          <div className='mb-3' >

          <span>
          {item?.categoryName}

          </span>
          <span className='btn  btn-sm'  style={{float:'right'}}><i class="fa-solid fa-trash" style={{color:'#ff0000'}}onClick={()=>removeCategory(item?.id)}></i></span>

          </div>

          <div style={{width:'100%'}}>

            {item?.allvideos.map(video=>(
              <Videocard isCategory={true} video={video}/>
            ))}

          </div>
         
          
        </div>
        
      ))
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingId"
        label="ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter unique Id"  name='id' onChange={(e)=>handleVideoCategory(e)}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCategory" label="category Name">
        <Form.Control type="text" placeholder="category Name"  name='categoryName' onChange={(e)=>handleVideoCategory(e)}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category