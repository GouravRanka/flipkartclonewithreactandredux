import React from 'react'
import AddNote from '../API/Api'
import { useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { Increment } from '../Redux/Actions/Actions';
import { deletealltodoapi } from '../API/Api';



export default function AddTodo() {
    const [title, settitle] = useState("")
   
 
    const dispatch = useDispatch()

    const addingtodo = async ()=>

    {
        console.log(title)
        settitle(null);
        dispatch(Increment())
        
        // setstate(state+1)
        await  AddNote(title);

  
    }
 const deletealltodo = async ()=>
 {
    dispatch(Increment())
    await deletealltodoapi();
 }
   const handleonchange = (e)=>
   {
settitle({...title, [e.target.name]: e.target.value });
// console.log(title);
   }
    
    return (
        <div className='container'>
            <h1>Enter your task</h1>
    <textarea className="form-control" onChange={(e) => handleonchange(e)} name='title'  id="exampleFormControlTextarea1" rows="3"></textarea>
    <button onClick={ addingtodo}  className="btn btn-primary my-4">add task</button>
    <button style={{marginLeft:"4px"}} onClick={ deletealltodo}  className="btn btn-primary my-4">Delete All</button>
            </div>
    )
}
