const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const { response } = require("express");


const app = express();


app.use(morgan("dev"));
app.use(express.json({}))
app.use(express.json({
  extended: true
}))


//app.use((req, res, next) =>{

//  console.log("middle-ware run");
  //  req.famName = "Gepala"
  //  next();

//});


dotenv.config({
    path:"./config/config.env"
});


connectDB();


//app.get("/todo", (req, res) => {

  //  res.status("200").json({
    //    name: "Chandan",
    //    famName: req.famName
   // });
//});

  

app.use('/api/todo/auth', require('./routes/user'))

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log('server running on port:'+ PORT.green.underline.bold));