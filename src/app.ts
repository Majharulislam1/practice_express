import express from 'express';
 
import cors from 'cors'
import { note_routes, User_routes } from './app/Routers/routers';
 
 
 
 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/note', note_routes);
app.use('/user', User_routes);


app.get('/',(req,res)=>{
     res.send('kira ki ovesta');
})




export default app;

