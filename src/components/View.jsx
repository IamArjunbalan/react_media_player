import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'



function View({resState}) {
  const [allVideos,setAllVideos]=useState([])
  const [delResponse,setDelResponse]=useState(false)
  const delResUpdate=()=>{
    setDelResponse(true)
  }

  const getVideo=async()=>{
    let res=await getVideos()
    // console.log(res.data)
    setAllVideos(res.data)
    setDelResponse(false)
  }
  useEffect(()=>{
    getVideo()

  },[resState,delResponse])


  return (
    <div className='p-3 border border-primary   shadow rounded'>
      <Row>
        {
          allVideos?.map(item=>(
            <Col sm={12} md={6} className='mb-2'>

              <Videocard delResUpdate={delResUpdate} video={item}/>  


            </Col>
          ))
        }



      
      </Row>
      
    </div>
  )
}

export default View