import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './success.css'

const Success = () => {

  return (
    <>
      <Navbar />
      <section className='booking--header'>
        <div className="success_cont" style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-50%,-50%)", color: "black", textAlign: "center" }}>
          <img src="/tick.svg" style={{ width: "50px" }} />
          <h1 style={{fontSize:"40px"}}>
            Thank You
          </h1>
          <p>Your booking details have been mailed to you.</p>
          <img src="/sucess.png" style={{ width: "200px" }} alt="" />
        </div>
      </section>
    </>
  )
}

export default Success
