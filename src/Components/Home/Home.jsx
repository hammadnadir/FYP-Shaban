import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Pakistan.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsCheckLg, BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react'

const Home = ({ setSearchResults }) => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  
  const [dest, setDest] = useState('');
  const [mp, setMp] = useState(0);

  const handleSearch = async ()=>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/packages/q?${new URLSearchParams({ dest, mp })}`, {
      credentials: 'include'
    })

    if (res.status === 200) {
      const result = await res.json()
      setSearchResults(result.packages)
    }
  }


  return (
    <section id='home' className='home'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="Pakistan/mp4"></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
        <span  className="smallText">
          Our Packages
        </span>
        <h1 data-aos="fade-down" className="homeTitle">
          Search your Holiday
        </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
            <input type="text" onKeyDown={(e)=>console.log(e.keyCode)} onChange={(e)=>setDest(e.target.value)} placeholder='Enter name here...' />
            <GrLocation className="icon"/>
            </div>
          </div>


          {/* <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
            <input type="date" />
           
            </div>
          </div> */}


          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="city">Max price:</label>
            <h3 className="total">Rs {mp}</h3>
            </div>
            <div className="input flex">
              <input type="range" max="30000" min="10000" onChange={(e) => setMp(e.target.value)} value={mp}/>
            </div>
          </div>

          <div className="searchOptions flex" onClick={handleSearch} style={{ cursor: 'pointer' }} >
           <HiFilter className="icon"/>
           <span>SEARCH</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
         <div className="rightIcons">
          <FiFacebook className="icon"/>
          <AiOutlineInstagram className="icon"/>
          <SiTripadvisor className="icon"/>
         </div>
         <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Home
