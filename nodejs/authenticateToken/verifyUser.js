import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const verifyUser = (req, res, next)=>{
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Token is invalid" });
            }
            try {
                const user = await User.findOne({ email: decoded.email });
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                req.user = user;
                next();
            } catch (error) {
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
};
