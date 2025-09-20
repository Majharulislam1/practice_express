 
 
import mongoose from "mongoose";
import app from "./app";



let server ;
const port = 5000;

async function main(){
       
     try { 
        await mongoose.connect('mongodb+srv://majharul2022:majharul2022@cluster0.5g7cb.mongodb.net/practice_mongo?retryWrites=true&w=majority&appName=Cluster0');
        server = app.listen(port,()=>{
         console.log('server is running');
      })
       
     } catch (error) {
         console.log(error);
     }
}



main();

 