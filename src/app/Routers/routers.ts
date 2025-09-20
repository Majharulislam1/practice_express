import { Router } from "express";
import { create_note, delete_note, find_all_note, find_single_note, update_note } from "../controllers/note.controllers";
import { all_user, create_user, delete_user, single_user, update_user } from "../controllers/user.controllers";


const note_routes = Router();
const User_routes = Router();

note_routes.get('/',find_all_note);
note_routes.post('/create',create_note);
note_routes.get('/:id',find_single_note);
note_routes.patch('/:id',update_note);
note_routes.delete('/:id',delete_note);

User_routes.get('/',all_user);
User_routes.post('/create',create_user);
User_routes.get('/:id',single_user);
User_routes.patch('/:id',update_user);
User_routes.delete("/:id",delete_user);



export    {
    note_routes,
    User_routes
};