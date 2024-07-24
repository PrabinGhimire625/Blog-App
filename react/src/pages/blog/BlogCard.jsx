import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ type }) => {
  console.log('Image URL:', type.imageUrl);  // Log the image URL
  console.log(type);
  return (
    
<Link to={`/singleBlog/${type._id}`}>
<div className="flex justify-center mt-5 key={type._id}">
      <div className="w-[1500px] flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div 
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
        > 
        <img src={type.imageUrl} alt="Blog Image" />
          <img 
            className="w-10 h-10 rounded-full mr-4"
            src={type.imageUrl}
            alt=""
          />
        </div>
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{type.title}</div>
            <p className="text-gray-700 text-base text-justify">{type.description}</p>
          </div>
          <div className="flex items-center">
            <img 
              className="w-10 h-10 rounded-full mr-4"
              src="longHair.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Prabin Ghimire</p>
              <p className="text-gray-600">Aug 24</p>
            </div>
          </div>

            <p className="mt-4 text-red-500 cursor-pointer hover:underline hover:text-red-600">See More</p>
       
        </div>
      </div>
    </div>        
</Link>
    
  );
};

export default BlogCard;

