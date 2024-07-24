import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard.jsx'
import {AuthContext} from "../../context/AuthContext.jsx"

const Blog = () => {
  const {blogs,setBlogs, fetchBlog}=useContext(AuthContext);
  //console.log(blogs)
  useEffect(()=>{
    fetchBlog()

  },[])
  return (
    <>
    <div className="flex flex-wrap justify-center mt-5">
      <div className="addBlog border border-gray-300 p-4 rounded-lg text-center">
        <p className="font-bold mb-4 underline">Create the post what you want to share!</p>
        <p className="font mb-4 ">Create a new blog post from this new application!</p>
        <Link to='/addBlog'>
          <button className="font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg shadow-sm">Create blog</button>
        </Link>
      </div>
    </div>

    <div className="">
      {
        blogs.length>0 && blogs.map((blog)=>(
          <BlogCard type={blog}/>
        ))
      }
      </div>
    </>
  )
}

export default Blog
