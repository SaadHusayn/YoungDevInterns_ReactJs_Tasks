import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    //stopping form from default submitting
    e.preventDefault()

    emailjs.sendForm('portfolio_contact', 'contact_form', refForm.current, 'lLe-cEUu7wt0YEexJ').then(
      () => {
        alert('Message successfully sent!')
        window.location.reload()
      },
      (error) => {
        console.log(error)
        alert('Failed to send the message, please try again!')
      }
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              index={15}
              str={'Contact me'}
              letterClass={letterClass}
            />{' '}
          </h1>
          <p>
            I'm always open to new opportunities and collaborations. Whether you
            have a project in mind or just want to connect, feel free to reach
            out. You can contact me through the form below, and I'll get back to
            you as soon as possible. Looking forward to hearing from you!
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className='info-map'>
          Saad Hussain,
          <br />
          Pakistan,
          <br />
          FAST NUCES,
          <br />
          Karachi
          <br />
          <span>rsaad5095@gmail.com</span>
        </div>

        <div className='map-wrap'>
          <MapContainer center={[24.85725, 67.26459]} zoom={18}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[24.85725, 67.26459]}>
              <Popup>Saad studies here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
