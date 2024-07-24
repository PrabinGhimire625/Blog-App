import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AuthState } from '../context/AuthState'

const Navbar = () => {
  const {loginStatus,handleLogout}=useContext(AuthContext)
  console.log(loginStatus)

  return (
    <>
      <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
        <div className="bg-gray-300 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog App</span>
          </a>
          <div className="bg-gray-300 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          {!loginStatus ?(
            <Link to="/login"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>
          ):(
           <>
            <Link to="/profile"><button type="button" className="relative h-12 w-12 rounded-full overflow-hidden flex items-center justify-center"><img src="/longHair.png" alt="" className="w-11 h-11 object-cover rounded-full" /></button></Link>
            <Link to=""><button type="button" onClick={handleLogout} className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-800  ml-10 mt-2">Logout</button></Link>
            
           </>
            
            ) }
          </div>
          
          <div className="bg-gray-300 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="bg-gray-300 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/"><a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a></Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              {/* <li>
                <Link to="/product"><span href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</span></Link>
              </li> */}
              <li>
                <Link to="/blog"><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
