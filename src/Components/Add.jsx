import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'




function Add() {

  // Create a state to hold data from input

  const [video, setVideo] = useState({
    caption:"",
    Image:"",
    url:''
  });

  const validateLink =(e) =>{
    
  }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(video);

  return (
    <>
    <div className="d-flex align-items-center">
        <h5 id='h'>Upload New Video</h5>
        <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='2x'/></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5>Upload New Video</h5>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,Image:e.target.value})}/>
            <input type="text" placeholder='Video URL' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add