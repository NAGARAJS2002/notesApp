import bcryptjs from "bcryptjs";
import User from  "../model/userModel.js"

export const signup = async  (req,res,next) =>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
    if(!username ||!email || !password) {
        return res.status(400).json({error: "All fields (username, email, password) are required"})
    }

    try {

        const hashPassword = bcryptjs.hashSync(password,10);

        
        const newUser = new User({
            username,
            email,
            password: hashPassword,

        });
       
        

        await newUser.save();
    res.status(201).json('User Created Successfully ');
    } catch (error) {
       next(error) 
    }
}