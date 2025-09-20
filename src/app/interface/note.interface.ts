import { Types } from "mongoose";



export interface Note_interface {
     'title' : string,
      'content':string,
      'ctg' : 'personal' | 'technology' | 'science',
      'creator' : string,
       'age' : string,
       'number_of_page' : number,
       'user_id' : Types.ObjectId;
}


