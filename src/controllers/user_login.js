import jwt from "jsonwebtoken";
import User from '../models/user.js';
import {comparePassword} from '../utils/hashPassword.js'




 const loggedInUser = async (req, res) => {
    const { email, password} = req.body
    try {
        const user = await User.findOne({ email });
        console.log("User found:", user);
        
        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        const isValidPassword = await comparePassword(password, user.password);

        console.log("Password is valid:", isValidPassword);
       
        
         if (!isValidPassword) {
            res.status(401).json({ message: 'Incorrect password' });
        };

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET,  { expiresIn: '1h' });

        const userData = user.toObject();
        delete userData.password;

        res.cookie("loggedIn_Token", token, {
            httpOnly: true,
            maxAge: 3600000,
        })

       res.status(200).json({message: "User logged in successfully", userData});

        
    } catch (error) {
        res.status(400).json({message : 'invalid user Data ', error: error.message })
    }
};

export {
    loggedInUser
}