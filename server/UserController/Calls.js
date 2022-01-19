// import { update } from "../../client/src/API/Api.js";
import todotitle from "../schema/todoSchema.js";

const gettitle = async (req,res)=>{
const data= req.body;
console.log("calling title u ",req.body)
const maindata=  new todotitle(data);

try
{
  await maindata.save();
  
  res.status(201).json("data saved successfully");
}
catch(error)
{
    res.status(409).json({ message: error.message});     
}
}
export const deletealltodo = async(req,res)=>
{
  try{
  const data = await todotitle.deleteMany({});
  console.log("data deleted")
  }
  catch(error){
res.status(503).json(error.message);
  }
}

export const getmytodos = async (req,res)=>
{
    try{

    const data= await todotitle.find();
    res.status(201).send(data) 
    return data;
    }
    catch(error)
    {
      console.log(error)
    }
    

}

export const deletetodo = async(req,res) =>
{
  try{
    await todotitle.deleteOne({_id: req.params.id});
    res.status(201).json("User deleted Successfully");
} catch (error){
    res.status(409).json({ message: error.message});     
}
}
export const updatetodo = async(req,res) =>
{

const data= req.body;
const updatedata= todotitle(data);
console.log(updatedata)
console.log(req.params.id)
console.log(updatedata.title)
try{
  await todotitle.updateOne({_id:req.params.id},{title:updatedata.title})
  res.status(201).json(updatedata);
}
catch(error)
{
  res.send({error:error.message})
}
}

// export const updatetodo = async(req,res) =>
// {
  
//   let data= await todotitle.findById(req.params.id);
//   console.log("updated data",data)
//   console.log("requested data",req.body)
//   // data=res.body;


//   const updatedata= new todotitle(data)
//   try{
//     await todotitle.updateOne(req.params.id,updatedata);
//     // res.status(201).json(updatedata)

    
//     // console.log("data updated in db")

// } catch (error){
//     res.status(404).json({ message: error.message});   
//     console.log("eror")  
// }
// }

export default gettitle;
export const deleteUser = async (req, res) => {

}