import React from 'react'
import { gettodos } from '../API/Api.js'
import AddTodo from './AddTodo'
import Todo from './Todo' 
import {useSelector} from 'react-redux'

import { useEffect } from 'react'

import { useState } from 'react'
// import { useContext } from 'react'
// import {MyContext} from '../Context Api/ContextApi.js'
export default function Todos()  {
//   let  {state}=useContext(MyContext)
    
    const [todos, settodos] = useState([])
    const state= useSelector((state)=>state.reducer)


  useEffect(() => {
      console.log("useffect chal gya")
  getthetodos();
    
  },[state])


  const getthetodos = async ()=>
  {
let {data}= await gettodos();
console.log(data);





settodos(data);


  }

    return (
        <>
            <AddTodo />
            <h1>My tasks</h1>
            <div className="container">
            <div className="row">

  
            
         
    {
        todos.length===0 ? <h1>NO todos... Add some</h1>:
   
        todos.map((todos)=>(
            <div className="col-sm-4">
      
            <Todo todos={todos} 
             state={state}  id={todos._id} 
             
              />
            

            
            <div></div>
            </div>
        ))
    }
            
           


            </div>
            </div>
        </>

    )
}



    

   
    