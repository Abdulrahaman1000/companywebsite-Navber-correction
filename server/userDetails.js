const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    fname: String,
    email: {type: String, unique: true},
    password: String, 
},
{
    collection: "Userinfo",
}
);

mongoose.model("UserInfo", UserDetailsSchema );