import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import WhatsappIcon from '../components/WhatsappIcon'

function MainLayout() {
  return (
   <>
   <Nav/>
   <main className='min-h-screen'>
      <Outlet/>
      <div className='fixed bottom-3 right-3'><WhatsappIcon/></div>
   </main>
   
   <Footer/>
   </>
  )
}

export default MainLayout