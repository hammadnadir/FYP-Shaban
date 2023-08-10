import React from 'react'
import TripCard from '../Cards'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import './main.css'
import './card.css'
import { useState } from 'react'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const Header = () => {
  const [packageData, setPackageData] = useState({})
  const { PackageId: id } = useParams();

  const getPackageData = useCallback(async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/packages/${id}`, {
      credentials: 'include'
    })

    if (res.status === 200) {
      const result = await res.json()
      setPackageData(result.package)
    }
  })

  useEffect(() => {
    getPackageData()
  }, [])

  return (
    <>
      <section className='booking--header'>
        <main className="container__custom">
          <TripCard />
        </main>
      </section>
      <main className="container__custom" style={{margin:"450px auto 0px auto"}}>
        {packageData ? (
          <div key={packageData.id} className="singleDestination">

            <div className="imageDiv">
              <img src={`/packages/${packageData.id}.jpeg`} alt="" />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{packageData.destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{packageData.location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{packageData.grade}<small>+1 </small> </span>
                </div>
                <div className="price">
                  <h5>{packageData.fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{packageData.description}</p>
              </div>
            </div>
          </div>
        ) : null
        }
      </main>
    </>
  )
}

export default Header