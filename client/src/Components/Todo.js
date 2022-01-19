import React from 'react'
import { Deletetodo } from '../API/Api.js'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Increment } from '../Redux/Actions/Actions';

export default function Todo({todos,id}) {
const dispatch = useDispatch();
const style1 = {
    widht:"150px",
    height:"150px",
    backgroundColor:"	#F2F3F4",
    borderRadius:"10px",
    padding:"10px",
    marginRight:"10px"
 
  
    
}
    const deletethetodo = async ()=>
    {
        await Deletetodo(id);
        dispatch(Increment());
        
      

    }
    return (
        <div style={style1}>
          
         
            <p>{todos.title}</p> 
              <button onClick={deletethetodo} className="btn btn-primary">Delete</button>
         <Link to=  {`/edittodo/${id}/${todos.title}` }  ><button   className="btn btn-primary mx-4">Edit</button> </Link>     
          
        </div>
  
    )
}
