import User from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
dotenv.config()

export const Signup=async(req,res)=>{
    try{
        const {username, email, password}=req.body
        const hashPassword=await bcrypt.hash(password,10);
        const user=await User.create({username, email, password:hashPassword})
        res.status(200).json({message:"New user is created successfully!", data:user})
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
}

export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(401).json({ message: "Incorrect password" });
      }
  
      const payload = { email: user.email, role: user.role };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.cookie("token", token);
      res.status(200).json({ message: "Login successful", token, data: user.role });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  };

//for profile
export const profile=async(req,res)=>{
    res.status(200).json({ message: "Success", data: {username: req.user.username, email: req.user.email}
    });
}

//Check if the user is logged in from the token inside cookie
export const checkLoggedIn = async (req, res) => {
  res.status(200).json({ message: "User is logged in to the system", user: req.user });
};

//logout
export const logout=(req, res) => {
  console.log("Logout route hit");
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};


//getall the user
export const getAllUser=async(req,res)=>{
  try{
    const user=await User.find()
    res.status(200).json({message:"Sucessfully get all the user",data:user})
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
}

//get the single user
export const getSingleUser=async(req,res)=>{
  try{
    const id=req.params.id
    const user=await User.findById(id);
    res.status(200).json({message:"Sucessfully get the single user",data:user})
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
}

//update the user
export const updateUser=async(req,res)=>{
  try{
    const id=req.params.id;
    const {username, email}=req.body
    const user=await User.findByIdAndUpdate(id,{username,email})
    res.status(200).json({message:"Sucessfully updated the user",data:user})
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
}

//delete the user
export const deleteUser=async(req,res)=>{
  try{
    const id=req.params.id;
    await User.findByIdAndDelete(id)
    res.status(200).json({message:"Sucessfully deleted the user"})
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
}