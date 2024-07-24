import { Router } from "express";
import { Signup, Login} from "../controller/userController.js";   
import { checkLoggedIn, logout,profile ,getAllUser,getSingleUser,updateUser,deleteUser} from "../controller/userController.js"
import { verifyUser } from "../authenticateToken/verifyUser.js";
const UserRouter = Router();

// Routes
UserRouter.route("/user/signup").post(Signup);
UserRouter.route("/user/login").post(Login);
UserRouter.route("/user/getAllUser").get(getAllUser);
UserRouter.route("/user/getSingleUser/:id").get(getSingleUser);
UserRouter.route("/user/:id").patch(updateUser)
UserRouter.route("/user/:id").delete(deleteUser)
UserRouter.route('/profile').get(verifyUser, profile); 
UserRouter.route('/checkLoggedIn').get(verifyUser,checkLoggedIn);
UserRouter.route('/logout').post(logout);


export default UserRouter;
