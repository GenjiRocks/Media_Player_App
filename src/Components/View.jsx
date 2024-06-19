import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getVideoApi } from '../services/allApi';

function View({addStatus}) {
  const[videodetails,setVideoDetails]=useState([])

    // State lifting for delete
    const [deleteStatus,setDeleteStatus] = useState([])

  const getVideo = async()=>{
  const result = await getVideoApi()
  setVideoDetails(result.data)
  
  }

  useEffect(()=>{
    getVideo()
  },[addStatus,deleteStatus])

  

  console.log(videodetails);

  return (
    
      <Row className='w-100 ms-4 ms-md-0'>
        {videodetails?.length>0?videodetails?.map((item)=>((<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard setDeleteStatus={setDeleteStatus} content = {item}/> {/* Passing data using props to VideoCard.jsx */}
      </Col>)))  
        :
      <p className='text-warning fs-5 mt-4'>No Video yet Uploaded...</p>
        
        }
        

      </Row>
    
  )
}

export default View