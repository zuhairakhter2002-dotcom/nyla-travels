import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

function Footer() {
  const link = [
    { name: "Home", to: "/" },
    { name: "Visa", to: "/visa" },
    { name: "Packages", to: "/packages" },
    { name: "Flight", to: "/flight" },
    { name: "Contact", to: "/contact" },
    { name: "About Us", to: "/about" }
  ]
  return (
    <div>
      <footer className='bg-blue-950'>
        <div className='grid grid-cols-1 md:grid md:grid-cols-3  gap-9 p-12 justify-center items-start md:justify-items-center'>
          <div>
            <h1 className='text-2xl text-yellow-400'>Nyla <span className='text-white'> Travles</span> </h1>
            <p className='text-gray-300 mt-2'>We specialize in delivering seamless travel experiences with the best deals on flights, hotels, and tour packages. Our mission is to make every journey comfortable, affordable, and unforgettable.</p>
            <div className='mt-4'> 
                 <Icon/>
            </div>
          </div>
          <div className='grid grid-cols-2 md:gap-15 '>
            <div className=' text-gray-300  '>
              <h3 className='text-xl text-yellow-400'>Link</h3>
              {link.map((l, i) => (
                <li key={i} className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to={l.to}>  {l.name}</Link></li>
              ))}
            </div >
            <div className='text-gray-300  justify-self-end'>
              <h3 className='text-xl text-amber-400'>Service</h3>
              <ul>
                <li className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to="/visa">Visa Assistance</Link></li>
                <li className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to="/flight">Flight Booking</Link></li>
                <li className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to="/hotel">Hotel Reservation</Link></li>
                <li className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to="/packages">Tour Packages</Link></li>
                <li className='list-none border-2 border-transparent  transition-colors duration-400 hover:text-amber-400  '><Link to="/insurance">Travel Insurance</Link></li>
              </ul>
            </div>
          </div>
          <div className='text-gray-300'>
            <h3 className='text-xl text-amber-400'> Office</h3>
            <address>
              <p>123 Travel Street, City, Country</p>
              <p>+1 (123) 456-7890</p>
              <p>Email: info@nylatravels.com</p>

            </address>

          </div>
        </div>
        <div className='h-0.5 bg-amber-400 '></div>
        <div className='text-center text-gray-500 p-4 bg-blue-950'>
          <p>&copy; 2023 Nyla Travels. All rights reserved.</p>
          <p>Designed  by Zita Team</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer