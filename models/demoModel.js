const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  name:{
    type: String,
    unique: true,
  },
  age:{
    type: Number,
    required: [true, "age is required"]
  },
  Subscribe:{
    type: String,
    default: 'yes'
  }
})

const DemoS = mongoose.model('DemoS',demoSchema);

module.exports = DemoS;
