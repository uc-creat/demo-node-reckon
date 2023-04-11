const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});

const port = 3000;

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(con=>{
  console.log("connected");
});

app.listen(port, ()=>{
  console.log("The app is running at port 3000")
})
