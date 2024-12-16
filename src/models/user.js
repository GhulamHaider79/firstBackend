import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
});

const User = mongoose.model('User', userSchema);



// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     require: true,
    
//   }
// });

// const User = mongoose.model('User', userSchema);



export default User;




