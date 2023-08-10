import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({ duration: 4000 })
  }, [])

  const contactSubmitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
      })
    })

    if (res.status === 200) {
      console.log(await res.text());
      navigate('/', { replace: true })
    }
  }

  return (
    <>
      <Navbar />
      <div className="contact" data-aos="fade-up">
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field" >
                          <h3 >Contact Us</h3>
                          <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                          <form id="myform" onSubmit={contactSubmitHandler}>
                            <div className="input_field">
                              <input type="text" placeholder="Name" id="name" name='name' />
                            </div>
                            <div className="input_field">
                              <input type="text" placeholder="Email" id="email" name='email' />
                            </div>
                            <div className="input_field">
                              <textarea placeholder="Message" id="message" name='message'></textarea>
                            </div>
                          </form>
                          <button type='submit' form="myform" className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </>
  )
}

export default Contact;