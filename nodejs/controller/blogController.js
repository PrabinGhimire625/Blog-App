import Blog from "../model/blogModel.js";
import fs from "fs"


export const addBlog = async (req, res) => {
  try {
    console.log(req.file); 
    let fileName ;
    if(!req.file){
        fileName = "data:image/png;base64,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"
    }else{
       fileName = "http://localhost:3000/" + req.file.filename
    }
    const { title, description } = req.body;
    const blog = await Blog.create({ title, description,imageUrl:fileName});
    res.status(200).json({ message: "Blog is successfully added", data: blog });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//get all the blog
export const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res
      .status(200)
      .json({ message: "All blogis fetch successfully", data: blog });
  } catch (errr) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//get singleBlog
export const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    res.status(200).json({ message: "All single blog is fetch successfully", data: blog });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//update blog
export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    
    // Find the existing blog data
    const oldData = await Blog.findById(id);
    if (!oldData) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let fileName = oldData.imageUrl; // Default to existing image URL

    // Handle new image upload
    if (req.file) {
      const oldImagePath = oldData.imageUrl;
      const localHostUrlLength = "http://localhost:3000/".length;
      const newOldImagePath = oldImagePath.slice(localHostUrlLength);
      
      // Delete the old image
      fs.unlink(`storage/${newOldImagePath}`, (err) => {
        if (err) {
          console.error("Error deleting old image:", err);
        } else {
          console.log("Old image deleted successfully");
        }
      });

      // Set new image URL
      fileName = "http://localhost:3000/" + req.file.filename;
    }

    // Update the blog document
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, imageUrl: fileName },
      { new: true } // Return the updated document
    );

    res.status(200).json({ message: "Successfully updated the data", data: updatedBlog });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//delete blog
export const deleteBlog=async(req,res)=>{
  try{
    const id=req.params.id
    const blog=await Blog.findByIdAndDelete(id)
    res.status(200).json({message:"Successfully delete the data",data:blog})
  }catch(err){
    res.status(500).json({ error: "Internal server error" });
  }
}