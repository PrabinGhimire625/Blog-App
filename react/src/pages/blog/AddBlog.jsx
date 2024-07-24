import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [image, setImage]=useState(null)
  const [errorMessage,setErrorMessage]=useState("")
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    try{
      e.preventDefault()
      const response=await axios.post("http://localhost:3000/blog",{title,description,image}, {headers: {'Content-Type': 'multipart/form-data' }}
      )
      if(response.status === 200){
        alert("Blog is successfully created!")
        navigate("/")
      }else{
        alert("Something went wrong")
      }
    }catch(err){
      console.log("Error on submitting form",err)
      setErrorMessage("Frist login to create the blog!");
    }
  }

  const errorMessageStyle = {
    color: "red",
    marginLeft: "50px",
    marginTop: "10px"
  };

  return (
    <>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog title</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="file"  onChange={(e)=>setImage(e.target.files[0])} name="imageUrl" id="imageUrl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="imageUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Blog</button>
        {errorMessage && <p className="error-message" style={errorMessageStyle}>{errorMessage}</p>}
      </form>
    </>
  );
};

export default AddBlog;
