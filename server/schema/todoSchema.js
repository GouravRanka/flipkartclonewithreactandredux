import mongoose from 'mongoose';
const { Schema } = mongoose;

const todo = mongoose.Schema({
  title:  String,
 
});
const todotitle = mongoose.model('mytodo', todo);
export default todotitle;