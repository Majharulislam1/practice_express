import { Model, model, Schema } from "mongoose";
import { Address, user_info, user_password, user_static } from "../interface/user.interface";
import bcrypt from "bcryptjs";


const address_model = new Schema<Address>({
      city:{type:String , default:'Dhaka'},
      zip:{type:Number, default:3580},
      country:{type:String,default:'Bangladesh'},
},{_id:false})




const userSchema = new Schema<user_info,user_static>({
     name:{type:String,required:true,trim:true},
     email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate:{
               validator:function(value){
                  return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(value);
               },
               message: props => `${props.value} is not a valid email!`
        }
     },
         password: {
        type: String,
        required: true,
    },
     age:{type:Number,required:true},
     gender:{type:String,enum:['Male' , 'Female'], default:'Male'},
     address:{
         type:address_model,
         default:()=>({})
     }

})

// userSchema.method('hash_password', async function hash_password(password:string) {
//            const has_pass = await bcrypt.hashSync(password, 10);
//            return has_pass;
// }); 
// userSchema.static('hash_password', async function hash_password(password:string) {
//            const has_pass = await bcrypt.hashSync(password, 10);
//            return has_pass;
// }); 

userSchema.pre('save',async function(){
     this.password = await bcrypt.hashSync(this.password, 10);
})

userSchema.post("save",function(doc){
     console.log(`${doc.email} successfully added`);
})

const User_Model = model<user_info,user_static>('user',userSchema);


export default User_Model;