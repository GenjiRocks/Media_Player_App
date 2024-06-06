import React from 'react'
import Header from '../Components/Header'
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Watchhistory() {
  return (
    <>
      <div className='d-flex justify-content-between p-5'>
      <h4>Watch History</h4>
      <h4><Link to={'/home'} style={{color:'white',textDecoration:'none'}} variant='warning'><FontAwesomeIcon icon={faArrowLeft} beat /> <span id='h'>Back to Home </span><FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h4>

      </div>
      <div className='p-3 container'>
      <Table striped bordered responsive size="sm" variant='dark'className='text-center' >
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th >Caption</th>
          <th>URL</th>
          <th >Time Stamp</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button></td>
        </tr>
       
      </tbody>
    </Table>
      </div>
      
    </>
  )
}

export default Watchhistory