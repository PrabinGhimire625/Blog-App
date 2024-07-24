import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/${id}`);
      if (response.status === 200) {
        setBlog(response.data.data);
      } else {
        console.log("Error fetching the blog!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/blog/${id}`);
      if (response.status === 200) {
        alert("Successfully deleted the blog");
        navigate("/blog");
      }
    } catch (error) {
      console.error("There was an error deleting the blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="mt-1 mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
      <div className="flex items-center text-center lg:text-left mt-0">
        <div className="space-y-8 mt-0">
          <div>
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 -mt-10"> Get Started</div>
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              {blog.title}
              <span className="text-blue-600 dark:text-blue-500"> now</span>!
            </h2>
            <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {blog.description}
            </h3>
          </div>
          <div className="flex space-x-4">
            <Link to={`/editBlog/${id}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Edit</button>
            </Link>
            <button onClick={() => deleteBlog(id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex items-center text-blue-500 lg:justify-end">
        <img src={blog.imageUrl} alt="Description of the image" className="w-3/4 h-auto lg:w-1/2"/>
      </div>
    </div>
  );
};

export default SingleBlog;
