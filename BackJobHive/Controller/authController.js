import { userModel } from "../Model/userModel.js";
import jwt  from "jsonwebtoken";
export const handleLogin = async (req, res) => {
    try {
      const {email,password}=req.body
      const user =await userModel.findOne({email})
      if(!user){
        res.send("User not found")
        return
      }
      if(user.password !== password){
        res.send("password not valid")
        return
      }
      var token = jwt.sign({email,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn: '1h'});
      res.status(200).json(token);
    } catch (error) {
      res.send(error.message);
    }
  }

  export const handleRegister = async (req, res) => {
    try {
      const { username,email,password} = req.body;
      const newUser = new userModel({
        username,email,password
      });
      var token = jwt.sign({email:newUser.email,role:newUser.role},process.env.JWT_SECRET_KEY,{expiresIn: '1h'});
      await newUser.save();
      res.status(200).json(token);
    } catch (error) {
      res.send(error.message);
    }
  }