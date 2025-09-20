 
import { Request, Response } from "express";
 
import Note_model from "../models/note.mode";
 
 


const create_note = async (req:Request,res:Response)=>{
    
     const data = req.body;
     const note = await Note_model.create(data);

     res.send({
         success:true,
         message:'successfully created',
         note
     })

}


const find_all_note = async (req:Request,res:Response)=>{
        
        const findAllNote = await Note_model.find().populate('user_id');

       res.send({
         success:true,
         message:'successfully find All Note',
         findAllNote
     })
} 


const find_single_note = async (req:Request,res:Response)=>{
   
        const id = req.params.id;

         const findAllNote = await Note_model.findById(id).populate('user_id');

       res.send({
         success:true,
         message:'successfully single Note',
         findAllNote
     })
        
        
} 

const update_note = async (req:Request,res:Response)=>{
       const update_data  = req.body;
       const id = req.params.id;
       const data = await Note_model.findOneAndUpdate({_id:id},update_data,{new:true});

       res.send({
         success:true,
         message:'successfully update Note',
         data
     })
        
}

const delete_note = async (req:Request,res:Response)=>{
       const id = req.params.id;
       const delete_data = await Note_model.findByIdAndDelete(id);

       res.send({
           success:true,
         message:'successfully delete Note',
          delete_data
       })

}



export {
     find_all_note,
     find_single_note,
     create_note,
     update_note,
     delete_note
}
 

