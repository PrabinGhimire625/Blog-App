import React, { useContext, useEffect } from 'react'
import Card from '../../components/Card'
import { AuthContext } from '../../context/AuthContext'   //to use the authContext

const Product = () => {

  const {fetchLaptop, laptops}=useContext(AuthContext)   //to use the authContext {laptop ma fetched vako data ayara store vako xa}
  useEffect(() => {
    fetchLaptop(); // Fetch laptop data when Home component mounts
  }, []);
  console.log(laptops)
  
  return (
    <>  
      <div className="flex flex-wrap justify-evenly -mt-5">
      {
        laptops.length>0 && laptops.map((laptop)=>(
          <Card type={laptop}/>
        ))
      }
      </div>
    </>
  )
}

export default Product
