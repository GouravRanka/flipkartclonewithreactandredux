import React from 'react'
import { useParams } from 'react-router-dom'
import { update } from '../API/Api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function EditTodo(req,res) {
    const {id} = useParams();
    
let history =useHistory();

const [title, settitle] = useState([])
    const handlechange = (e)=>
    { 
settitle({...title,[e.target.name]:e.target.value})
console.log(title)
    }
    const updatetodo =  async ()=>
    {
        // let a=4;
        console.log(id)
    

        
        
  await update(id,title);
  history.goBack();
  
    }
    return (
        <div>
              <textarea className="form-control" name='title' onChange={(e) =>handlechange(e)} id="exampleFormControlTextarea1" rows="3"></textarea>
              <button onClick={updatetodo}  className="btn btn-primary my-4">update</button>
        </div>
    )
}
