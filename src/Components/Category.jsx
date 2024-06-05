import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VideoCard from './VideoCard';



function Category() {
  return (
    <>
    <div className=''>
    <Button variant="warning" className='w-100 mb-3'>Add New Category <FontAwesomeIcon icon={faPlus} /></Button>
        </div>

        <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
        <div className='d-flex mb-3'>
        <p>Hindi Songs</p>
        <Button  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
          <VideoCard/>
        </div>
    </>
  )
}

export default Category