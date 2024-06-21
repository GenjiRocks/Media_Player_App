import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { useState } from 'react';
import { addCategoryApi, getCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {
  const [CategoryName, setCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory = async()=>{
   if(CategoryName){ /* Check weather the category input is empty or not */
    const reqBody = {
      CategoryName,
      allvideo:[]
    }
    //api call to add category
    const result = await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 & result.status<300){
      handleClose()
      toast.success('Video uploaded successfully')
      getAllCategory()
    }
   }else{
    toast.info('Please fill form completely')
   }
  }
 
  // Getting data from the server
  const getAllCategory = async()=>{
    const result = await getCategoryApi()
    if(result.status>=200 && result.status<300){
      setCategoryDetails(result.data)
    }
    
    console.log(result);
  }

  // update on page load useeffect for getallcateory
  useEffect(()=>{
    getAllCategory()
  },[])

  return (
    <>
    <div className=''>
    <Button onClick={handleShow} variant="warning" className='w-100 mb-3'>Add New Category <FontAwesomeIcon icon={faPlus} /></Button>
        </div>


    {categoryDetails?.length>0?categoryDetails.map((item)=>(
       <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0'>
       <div className='d-flex mb-3'>
       <p>{item.CategoryName}</p>
       <Button  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>
       </div>
         {/* <VideoCard/> */}
       </div>))
       :
       null

    }

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3> <FontAwesomeIcon icon={faPencil} /> Add New Category</h3>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" onChange={(e)=>{setCategoryName(e.target.value)}} placeholder='Enter the Category Name' className='form-control'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </>
  )
}

export default Category