import { Router } from "express";
import { addBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog} from "../controller/blogController.js";
import { verifyUser } from "../authenticateToken/verifyUser.js";
import multer from 'multer';
import { storage } from "../middleware/multerConfig.js";

// Set up multer with storage configuration
const upload = multer({ storage });
const blogRouter = Router();

// Define routes
blogRouter.route("/blog")
  .post(upload.single('image'), verifyUser,addBlog)  
  .get(getAllBlog); 

blogRouter.route("/blog/:id")
  .get(getSingleBlog)  
  .patch(upload.single('image'),updateBlog)   //update
  .delete(deleteBlog);  

export default blogRouter;
