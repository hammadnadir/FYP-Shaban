import React, { useEffect } from "react";
import './main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(() => {
    Aos.init({ duration: 4000 })
  }, [])

  return (
    <>
      <section className="aboutus">
        <main className="container__custom">
          <div className="cont">
            <h1 data-aos="fade-down" className="aboutTitle">
              About Us
            </h1>
            <hr className="hr"/>
            <div className="desc">
              <p>Pakistan a country which we all so dearly love but the country’s representation around the world is very limited and the potential of this nation has never been fully disclosed for the rest of the world to see. Pakistan is the land of opportunity and most importantly tourism. In this era of social media and web browsing it’s our responsibility to put Pakistan on every tourist’s map and expand the country’s tourism by making the process simple and efficient and let the world witness the beauty this country withholds. Whilst the rest of the world has digitized and moved on to further expand their tourism sectors and done so by making a very accessible and simple platform for a user to interact with and plan their desired journey thru the ease of their devices whilst at the comfort of their homes. We personally believe that Pakistan lacks in such form of accessibility and there’s a need to get things going and match up with the rest of the world and put Pakistan on the map. A website which helps you plan your trip and make reservations from the comfort of your homes is the proper solution to this particular problem. There are many websites around the world which achieve this goal but this project is designed to help the user explore and dig deep within the hidden treasures Pakistan</p>
              
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default About;