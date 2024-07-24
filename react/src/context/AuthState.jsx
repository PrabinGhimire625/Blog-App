import { AuthContext } from "./AuthContext.jsx";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AuthState = (props) => {
  const [laptops, setLaptop] = useState([]);
  const [blogs, setBlog]=useState([])
  const [users,setUser]=useState([])
  const [flag, setFlag]=useState("")
  const[loginStatus,setLoginStatus]=useState(0)

  //fetch all the users
  const fetchUser=async()=>{
    try{
      const response= await axios.get("http://localhost:3000/user/getAllUser")
      if(response.status===200){
        setUser(response.data.data)
      }
    }catch(err){
      console.error("There was an error fetching the user!", err);
    }
  }

  // Function to fetch the laptop data
  const fetchLaptop = async () => {
    try {
      const response = await axios.get("http://localhost:3000/laptop");
      setLaptop(response.data.data);
    } catch (err) {
      console.error("There was an error fetching the laptop!", err);
    }
  };

   // Function to fetch the laptop data
   const fetchBlog = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blog");
      setBlog(response.data.data);
    } catch (err) {
      console.error("There was an error fetching the laptop!", err);
    }
  };

  //check login status to show login or logout button
  const CheckloggedInStatus = async () => {
    try {
        const response = await axios.get("http://localhost:3000/checkLoggedIn", { withCredentials: true });
        if (response.status === 200) {
            setLoginStatus(response.data.user);
        } else {
           setLoginStatus(null)
        }
    } catch (err) {
        console.log("Error fetching the logged-in status", err);
    }
  };

  //handleLogout
  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      const response = await axios.post("http://localhost:3000/logout");
      console.log(response.data); // Check response data
      if (response.status === 200) {
        setLoginStatus(null);
      } else {
        console.log("Logout failed!");
      }
    } catch (err) {
      console.log("Error logging out:", err);
    }
  };
  
//useEffect hook
  useEffect(() => {
    fetchLaptop()
    fetchBlog()
    CheckloggedInStatus()
    fetchUser()
  }, [flag]);

  // console.log(users)
  // console.log(laptops)

  return (
    <AuthContext.Provider value={{ users, setUser,fetchUser, flag, setFlag,laptops, setLaptop, fetchLaptop, fetchBlog, handleLogout, blogs, setBlog,loginStatus,CheckloggedInStatus,setLoginStatus}}>
      {props.children}
    </AuthContext.Provider>
  );
};
