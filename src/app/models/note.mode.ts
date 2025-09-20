import { model, Schema, Types } from "mongoose";
import { Note_interface } from "../interface/note.interface";
 

const  note_Schema = new Schema<Note_interface>({
       title:{type:String, required:true , trim:true},
       content:{type:String, required:true , trim:true},
       ctg:{
            type:String,
            default:'personal'
       },
       creator:{type:String, required:true , trim:true},
       age:{type:String,
            
           validate:{
                  validator:function(value:any){
                     return /\d{3}-\d{3}-\d{4}/.test(value);
                  },
                   message:(props:any)=> `this phone number is wrong ${props.value}`
           }
          },
       number_of_page:{type:Number, default:1},
       
      user_id:{
         type:Schema.Types.ObjectId,
         ref: 'user',
         required:true
      }
  })





const Note_model = model('note_Schema',note_Schema);
export default Note_model;