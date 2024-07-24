import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/laptop/Product.jsx";
import Login from "./pages/User/Login.jsx";
import Signup from "./pages/User/Signup.jsx";
import  {AuthState} from "./context/AuthState.jsx";
import Card from "./components/Card.jsx";
import Navbar from  "./components/Navbar.jsx"

import SingleLaptop from "./pages/laptop/SingleLaptop.jsx"
import Landing from "./pages/Landing.jsx";
import Blog from "./pages/blog/Blog.jsx"
import AddBlog from "./pages/blog/AddBlog.jsx";
import BlogCard from "./pages/blog/BlogCard.jsx";
import SingleBlog from "./pages/blog/SingleBlog.jsx";
import EditBlog from "./pages/blog/EditBlog.jsx";
import Profile from "./pages/User/Profile.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import UserList from "./pages/admin/UserList.jsx";
import EditUser from "./pages/admin/EditUser.jsx";
const App = () => {
  return (
    <>
      <AuthState>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/addBlog" element={<AddBlog />}></Route>
            <Route path="/blogCard" element={<BlogCard />}></Route>
            <Route path="/singleBlog/:id" element={<SingleBlog />}></Route>
            <Route path="/blogCard" element={<BlogCard />}></Route>
            <Route path="/editBlog/:id" element={<EditBlog />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/card" element={<Card />}></Route>
            <Route path="/SingleLaptop/:id" element={<SingleLaptop />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/SingleLaptop/:id" element={<SingleLaptop />}></Route>
            <Route path="/userList" element={<UserList/>}> </Route>
            <Route path="/editUser/:id" element={<EditUser/>}> </Route>
          </Routes>
        </BrowserRouter>
      </AuthState>
    </>
  );
};

export default App;
