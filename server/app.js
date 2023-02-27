//creating and connecting to server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
app.use( cors ());
app.use(express.json());

const jwt=require("jsonwebtoken");

const JWT_SECRET = 
    "hwhehebdbdbbn()dksk,ldsncbcjjwdjhfnnn?{}[]p08838d";


const mongoUrl =
"mongodb+srv://walex1257:ogunsa1234@cluster0.stemguy.mongodb.net/?retryWrites=true&w=majority";



mongoose
.connect(mongoUrl,{
    useNewUrlParser:true
})
.then(() =>
{console.log("connected to the database");
})
.catch((e) =>console.log(e))

 

app.listen(5000, ()=> {
    console.log("server started");
});
//creating API
app.post("/post", async (req,res) =>{
    console.log(req.body);
    const {data} = req.body;
try {
    
if(data=="Abdulrahman"){
    res.send({status: "ok"})
} else {
    res.send({status: "User Not found"});
}
} catch (error){
    res.send({status: "Something went wrong try again"});
}
});

require("./userDetails");

const User = mongoose.model("UserInfo");
//register API
app.post("/register", async(req, res) =>{
    const {fname, email, password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldUser = await User.findOne({ email });

        if (oldUser){
            return res.send({error: "User Exist"});
        }
        await User.create({ 
            fname,
            email,
            password : encryptedPassword,
        })
        res.send({status: "ok"});
    } catch (error) {
        res.send({status: "error"});
    }

    app.post("/login", async(req, res) =>{
        const {email, password} = req.body;

        //find if user exist
        const user = await User.findOne({ email });
        if(!user) {
            return res.json({error: "User Not found "});
        }
        if (await bcrypt.compare(password, user.password))  {
            const token = jwt.sign({}, JWT_SECRET);

            if(res.status(201)){
                return res.json({ stauts: "ok", data: token});
            } else{
                return res.json({ error: "error"});
            }
        }
         res.json({status: "error", error: "InvAlid Password"});
    });
    app.post("/userData", async (req, res) =>{
        const {token} = req.body;
        try{
            const user=jwt.verify(token, JWT_SECRET);
            const useremail =user.email;
           User.findOne({ email: useremail})
            .then((data) =>{
                res.send({status: "ok", data: data});
            })
            .catch((error) =>{
                res.send({status: "error", data: error})
            });
        } catch (error) {}
    })

});