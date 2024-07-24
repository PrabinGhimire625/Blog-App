import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ type }) => {
  console.log(type);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key={type._id}>
        <img className="w-full" src="https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg" alt="Laptop" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{type.name}</div>
          <p className="text-black-700 font-bold text-base">Rs : {type.price}</p>
          <p className="text-gray-700 text-justify text-base">{type.description}</p>
         <Link to={`/singleLaptop/${type._id}`}><button className="text-red-800 underline hover:text-red-500">See More</button></Link>
        </div>
      </div>
    </>
  );
};

export default Card;
