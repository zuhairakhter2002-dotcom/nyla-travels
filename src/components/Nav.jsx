import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import WhatsappBtn from './WhatsappBtn'
const link = [
    { name: "Home", to: "/" },
    { name: "Visa", to: "/visa" },
    { name: "Packages", to: "/packages" },
    { name: "Flight", to: "/flight" },
    { name: "Contact", to: "/contact" },
    { name: "About Us", to: "/about" }
]
//   <Link to="/"><button className='border-2 border-transparent transition-colors duration-400 hover:text-amber-400  hover:border-b-black active:text-amber-400 active:border-b-black'>Home</button></Link>
function Nav() {
    const [ismobile, setismobile] = useState(false)
    const [scroll, setscroll] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'
    useEffect(() => {

        const handlescroll = () => {
            if (!isHome || window.scrollY > 100) {
                setscroll(true)
            }
            else {
                setscroll(false)
            }
        }
        handlescroll()
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [isHome])

    return (
        // ${isHome? "absolute top-0 ": "sticky"}
        <>
           
                <div className={` flex justify-between w-full ${isHome ? "fixed top-0" : "sticky top-0 transition-all duration-700"} transition-all duration-900 ${scroll ? "  bg-blue-950 backdrop:-blur-md shadow-md:" : " bg-transparent "} p-6 rounded rounded-t-none z-50 
                `}>
                    <div className='text-2xl text-yellow-400'>Nyla <span className='text-white'> Travles</span> </div>
                    <div className='hidden md:flex  gap-4 text-white '>
                        <ul className='flex gap-4'>
                            {link.map((l, ) => (
                               
                                <li key={l.to}> <NavLink className={({isActive}) => isActive ? 'text-amber-400 border-b-black' : 'text-white'} to={l.to} ><button className='border-2 border-transparent transition-colors duration-400 hover:text-amber-400  hover:border-b-black  '>{l.name}</button> </NavLink></li>

                            ))}
                        </ul>
                        <div><WhatsappBtn /> </div>
                    </div>

                    <div onClick={() => setismobile(!ismobile)} className='md:hidden corsur-pointer'>
                        <svg className={`flex ${ismobile && "rotate-z-90 duration-300"} duration-300 md:hidden `} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </div>

                </div>

           
            {ismobile && <div className='flex duration-500 flex-col  h-screen absolute w-3xs items-center rounded right-0 top-19 bg-gray-500 p-2'>
              <ul>
                {link.map((l , i)=>(
                    <li key={i}>
                        <Link to={l.to}><button>{l.name}</button></Link>
                    </li>
                ))}
              </ul>
            </div>}
        </>
    )
}

export default Nav