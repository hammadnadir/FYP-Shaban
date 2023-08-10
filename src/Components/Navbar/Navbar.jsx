import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { useEffect } from 'react'
import { useCallback } from 'react'

const   Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const [loginState,setLoginState] = useState(false);
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const logincheck = useCallback(async ()=>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/ping`,{
      credentials: 'include'
    });

    if(res.status ==200){
      setLoginState(true)
    }
  })
  useEffect(()=>{
    logincheck()
  },[])
  // console.log()
  const removeNav = ()=>{
      setActive('navBar')
  }
  return (
    <section className='navBarSection'>
       <header className="header flex">
        
          <div className="logoDiv">
            <a href="#" className="logo flex"><h1><MdOutlineTravelExplore className='icon' />  Exhibit Pakistan.</h1></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="/" className="navLink">Home</a>
              </li>
              {/* <li className="navItem">
                <a href="#" className="navLink">Destinations</a>
              </li> */}
              <li className="navItem">
                <a href="/packages" className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a href="/about" className="navLink">About </a>
              </li>
              <li className="navItem">
                <a href="/contact" className="navLink">Contact</a>
              </li>
              <button className="btn">
                <a href="/destination">BOOK NOW</a>
              </button>
              <button className="btn">
                {!loginState?(<a href={`${process.env.REACT_APP_API_URL}/auth/google`} >Login</a>):(<a href={`${process.env.REACT_APP_API_URL}/auth/logout`} >Logout</a>)}
              </button>

            </ul>
              <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
    </section>
  )
}

export default Navbar