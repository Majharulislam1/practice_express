import { Request, Response } from "express";
import User_Model from "../models/user.model";
import z, { email } from "zod";



const zod_valid = z.object({
      name:z.string(),
      email:z.string(),
      age:z.number(),
      gender:z.string().default('Male'),
})


const create_user = async ( req: Request,res: Response,) => {
    const user = req.body;
    
    //  const zod_value = zod_valid.parse(user);
     
    // instant_methods
    // const crt_user = new User_Model(user);
    // const password = await  crt_user.hash_password(user.password);
    
    // crt_user.password = password;
    // await crt_user.save();


    const password = await User_Model.hash_password(user.password);
     user.password = password;
    const create_user = await User_Model.create(user);
    res.send({
        success: true,
        message: 'successfully create user',
        create_user
    })
}


const all_user = async (req: Request, res: Response ) => {
    const all_user = await User_Model.find();
    res.send({
        success: true,
        message: 'successfully find all user',
        all_user
    })
}


const single_user = async ( req: Request, res: Response ) => {
    const id = req.params.id;
    const user = await User_Model.findById({ _id: id });
    res.send({
        success: true,
        message: 'successfully find a user',
        user
    })
}


const update_user = async (req:Request, res:Response) => {
      const id = req.params.id;
      const data = req.body;
      const new_user = await User_Model.findByIdAndUpdate(id,data,{new:true});
     res.send({
        success: true,
        message: 'successfully update a user',
        new_user
    })
}


const delete_user = async(req:Request,res:Response) =>{
      const id = req.params.id;
      const delete_user = await User_Model.findByIdAndDelete(id);
      res.send({
        success: true,
        message: 'successfully delete a user',
         delete_user
      })
}



export {
    create_user,
    all_user,
    single_user,
    update_user,
    delete_user
}




