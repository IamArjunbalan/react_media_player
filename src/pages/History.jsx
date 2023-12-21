import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import { Link } from 'react-router-dom'




function History() {

  const [watch,setWatch]=useState([])

  const handleHistoryList=async()=>{
    const res=await getHistory()
    console.log(res)
    setWatch(res.data)
  }
  useEffect(()=>{
    handleHistoryList()
  },[])

 


  return (
    <div className='p-5'>
      <h3>Watch History
      <Link  style={{float:'right',fontSize:'25px', textDecoration:'none'}}  to={'/Home'}><i class="fa-solid fa-house"></i></Link>
      </h3>
      
      
        <table className='table table-stripped bg-dark p-5'>
        
        <tr className='text-center'>
          <th className='p-3'>ID</th>
          <th>THUMB NAIL</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
        {
          watch.map((item,index)=>(

            <tr className='text-center'>
          <td className='p-3'>{index+1}</td>
          <td ><img   className='m-3' width={100} height={50} src={item?.thumbnail} alt="img" /></td>
          <td className='m-3 p-4' >{item?.caption}</td>
          <td style={{fontSize:'15px'}}>{item?.url}</td>
          <td style={{fontSize:'13px'}}>{item?.date}</td>
        </tr>

          ))
        }
        
      </table>


      
    </div>
  )
}

export default History