import React, { useCallback, useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiClipboardList } from 'react-icons/hi'
import img1 from '../../Assets/1.jpeg'
import img2 from '../../Assets/2.jpeg'
import img3 from '../../Assets/3.jpeg'
import img4 from '../../Assets/4.jpeg'
import img5 from '../../Assets/5.png'
import img6 from '../../Assets/6.jpeg'
import img7 from '../../Assets/7.jpeg'
import img8 from '../../Assets/8.jpeg'
import img9 from '../../Assets/9.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useContext } from 'react'
import SEARCH_CONTEXT from '../../context/searchSlice'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const imgMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
}

const Main = () => {
  const { search } = useContext(SEARCH_CONTEXT)
  const [topPackages, setTopPackages] = useState([])
  const navigate = useNavigate()

  const getData = useCallback(async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/packages/top`, {
      credentials: "include"
    })

    if (res.status == 200) {
      const result = await res.json();
      setTopPackages(result.packages)
    }
  })

  useEffect(() => {
    getData()
    Aos.init({ duration: 4000 })
  }, [])

  const bookingRedirect = (id) => {
    navigate(`/destination/${id}`)
  }

  return (
    <section id='main' className='main section container'>
      <div className="secTitle">
        <h3 className="title">
          Popular Packages
        </h3>
      </div>

      <div className="secContent grid">
        {
          topPackages.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (

              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgMap[id]} alt="" />
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
  )
}

export default Main