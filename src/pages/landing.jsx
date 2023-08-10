import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiClipboardList } from 'react-icons/hi'
import { useNavigate}  from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Main from '../Components/Main/Main'
import Navbar from '../Components/Navbar/Navbar'

const Landing = () => {
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const [searchResults, setSearchResults] = useState([])

  const bookingRedirect = (id) => {
    navigate(`/destination/${id}`)
  }

  useEffect(() => {
    if (!!searchResults.length) {
      // window.location.href = '/#main'
      searchRef.current.scrollIntoView()
    }
  })

  return (
    <>
      <Navbar />
      <Home setSearchResults={setSearchResults} />
      {!searchResults.length ? <Main /> : (
        <section id='main' className='main section container' ref={searchRef}>
          <div className="secTitle">
            <h3 className="title">
              Search Results
            </h3>
          </div>

          <div className="secContent grid">
            {
              searchResults.map(({ id, destTitle, location, grade, fees, description }) => {
                return (

                  <div key={id} data-aos="fade-up" className="singleDestination">

                    <div className="imageDiv">
                      <img src={`/packages/${id}.jpeg`} alt="" />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1 </small> </span>
                        </div>
                        <div className="price">
                          <h5>Rs {fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex' onClick={() => bookingRedirect(id)} >Book Now <HiClipboardList className="icon" /> </button>
                    </div>
                  </div>

                )
              })
            }
          </div>

        </section>
      )}
      <Footer />
    </>
  )
}

export default Landing
