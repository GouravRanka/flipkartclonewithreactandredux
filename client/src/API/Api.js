import axios from "axios"
import { useContext } from 'react'
// import {MyContext} from '../Context Api/ContextApi.js'

const url= "http://localhost:8000/addnote"
const url1= "http://localhost:8000/gettodo"
const url2= "http://localhost:8000"
const url3= "http://localhost:8000/edittodo"

export const deletealltodoapi = async()=>
{
await axios.delete(`${url2}/deletealltodo`)
}
const AddNote = async (title)=>
{
    
    console.log("your title is ",title)
    await axios.post(url,title)
    // let  {state,setstate}=useContext(MyContext)
    // setstate(state+1);
    // console.log(state)
}
export const gettodos = async()=>
{
    const data= await axios.get(url1);
    return data;
}
export const Deletetodo = async(id)=>

{
    console.log("daleltef todo api called with id",id)
    await axios.delete(`${url2}/${id}`)
    // let  {state,setstate}=useContext(MyContext)
// setstate(state+1);
// console.log(state)

}

export const update = async(id,title,res) =>
{
    console.log(id)
    try{
const data=await axios.put(`${url3}/${id}`, title)
return data;
    }
    catch(error){
        // res.status(401).send("error while calling update api",error.message)
    }
}
export default AddNote;

