  
import mongoose from 'mongoose';

const Connection = async () => {
const URL=`mongodb+srv://gourav:gouravranka@reactflipkartclone.ykned.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;