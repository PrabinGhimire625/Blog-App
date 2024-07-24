import React from 'react'
import { Link } from 'react-router-dom'

const SingleLaptop = () => {
  return (
    <>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" src="data:image/jpeg;base64,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" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BOOK NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"></h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed"> </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900"></span>
          <Link ><button  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Edit</button>
          </Link>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Delete</button>
        </div>
      </div>
    </div>
  </div>
</section>


    

    </>
  )
}

export default SingleLaptop
