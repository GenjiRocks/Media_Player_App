import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { useState } from 'react';


function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className=''>
    <Button onClick={handleShow} variant="warning" className='w-100 mb-3'>Add New Category <FontAwesomeIcon icon={faPlus} /></Button>
        </div>

        <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
        <div className='d-flex mb-3'>
        <p>Hindi Songs</p>
        <Button  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
          <VideoCard/>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3> <FontAwesomeIcon icon={faPencil} /> Add New Category</h3>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Enter the Category Name' className='form-control'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Category