import mongoose from "mongoose";

const userLoginSchema = new mongoose.Schema({
name: {
    type: String,

},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
}


}, {timestamps: true});


 const logInUser = mongoose.model("logInUser", userLoginSchema);

 export default logInUser;