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

  // const validateLink =(e) =>{
  //   const link = e.target.value;
  //   if(link.endsWith('?feature=share')){
  //       const yTkey = link.slice(-26,-15)
  //       let embedLink = `https://www.youtube.com/embed/${yTkey}`
  //       setVideo({...video,url:embedLink})
  //       console.log(`if ${yTkey}`);
  //   }
  //   else if(link.startsWith('https://youtu.be')){
  //     const yTkey = link.slice(17,28)
  //     let embedLink = `https://www.youtube.com/embed/${yTkey}`
  //     setVideo({...video,url:embedLink})
  //     console.log(`else if ${yTkey}`);
  //   }
  //   else{
  //     const yTkey = link.slice(-11)
  //     let embedLink = `https://www.youtube.com/embed/${yTkey}`
  //     setVideo({...video,url:embedLink})
  //     console.log(`else ${yTkey}`);

  //   }

  // https://www.youtube.com/watch?v=EJ-fmIKVU5k&ab_channel=Psivewri
  // https://youtu.be/EJ-fmIKVU5k?si=2p-zrh4iMWodZnuP
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/EJ-fmIKVU5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  // }

  // for clearing when click on cancel or close]
  const handleClose1 = ()=>{
    setVideo({
      caption:"",
      Image:"",
      url:""
      })
  }

  const handleUpload =(e)=>{
    e.preventDefault();
    const{caption,Image,url} = video
    if(!caption || !Image || !url){
      alert('Please fill form completely')
    }
    else{
      if(url.endsWith('?feature=share')){
              const yTkey = url.slice(-26,-15)
              let embedLink = `https://www.youtube.com/embed/${yTkey}`
              setVideo({...video,url:embedLink})
              console.log(`if ${yTkey}`);
          }
          else if(url.startsWith('https://youtu.be')){
            const yTkey = url.slice(17,28)
            let embedLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embedLink})
            console.log(`else if ${yTkey}`);
          }
          else if(url.startsWith('https://www.youtube.com/watch?')){
            const yTkey = url.slice(32,43)
            let embedLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embedLink})
            console.log(`else if ${yTkey}`);
          }
          else{
            const yTkey = url.slice(-11)
            let embedLink = `https://www.youtube.com/embed/${yTkey}`
            setVideo({...video,url:embedLink})
            console.log(`else ${yTkey}`);
      
          }
    }
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
            <input type="text" placeholder='Video Caption' className='form-control' value={video.caption} onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='Video Image' className='form-control mt-3' value={video.Image} onChange={(e)=>setVideo({...video,Image:e.target.value})}/>
            <input type="text" placeholder='Video URL' className='form-control mt-3' value={video.url} onChange={(e)=>setVideo({...video,url:e.target.value})}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add