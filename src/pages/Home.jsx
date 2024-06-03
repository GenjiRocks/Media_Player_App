import React from 'react'
import Header from '../Components/Header'
function Home() {
  return (
    <>
    <div className="row mt-5 w-100 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
      <h2>Welcome to <span style={{color:'orange'}}>Media Player</span></h2>
    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vero nulla quo suscipit magnam at, omnis quaerat. Cumque, iste quibusdam iusto sit corporis illo earum quo rerum, ex voluptatum asperiores!
    Blanditiis fugit quod corporis praesentium odit consequatur quisquam animi laborum repellat. Tenetur sunt error nisi provident itaque consequatur quae quam. Perferendis id sint enim ducimus ab nisi nesciunt maxime itaque?
    Mollitia blanditiis repudiandae adipisci aliquam odit cumque, iure nesciunt quod, optio sequi consequatur illum earum quos obcaecati commodi, maxime numquam doloremque quia! Dolor dolorum culpa, rerum nobis corporis officiis assumenda.</p>
    <button className='btn btn-warning mt-5'>Get Started</button>
      </div>
      
      <div className="col-md-5 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <img src="https://media1.tenor.com/m/TryWlGm_MlQAAAAd/shah-rukh-khan-music-day.gif" className='w-75' alt="" />
      
      </div>
      
    </div>
    

    </>
  )
}

export default Home