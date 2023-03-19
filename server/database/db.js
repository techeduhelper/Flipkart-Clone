import mongoose from "mongoose";


export const Connection = (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster1.rwaxekc.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('Database connected');
      }).catch(err => {
        console.error('Database connection error:', err);
      });
}

export default Connection;