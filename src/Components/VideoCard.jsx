import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { getVideoApi } from '../services/allApi';



function VideoCard({content}) {
  console.log(content);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const getVideo =async()=>{
    //   const result = await getVideoApi
    // }

  return (
    <>
       <Card style={{ width: '100%'}}>
      <Card.Img  onClick={handleShow} style={{cursor:'pointer'}} variant="top" src={content?.Image} width={'100%'} height={'300px'} />
      <Card.Body className='d-flex align-items-center mt-3'>
      <p>{content?.caption}</p> {/* Add ?. since its a time delay being happening */}
        <Button  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{content?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523" src={`${content?.url}?autoplay=1`} title="This is NVIDIA’s new GPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard