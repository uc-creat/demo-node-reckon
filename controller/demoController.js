// const fs = require('fs');
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`))

const DemoS = require('../models/demoModel');

exports.getAllData = async function(req,res){
  try{
    const Data = await DemoS.find();
    res.status(200).json({
      result:"success",
      data:{
        Data
      }
    })

  } catch (err){
    res.status(401).json({
      status:'something else',
      data:{
        message:err
      }
    })
  }
  
}

exports.getOneData = async function(req,res){
  try{
    const Data = await DemoS.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data:{
        Data
      }
    })
  } catch(err){
    res.status(401).json({
      status:'something else',
      data:{
        message:err
      }
    })
  }
}

exports.addData =  async function(req,res){

  try{

    const Data = await DemoS.create(req.body);

    res.status(201).json({
      status:"success",
      data:{
        Data
      }
  })
  } catch(err){
    res.status(400).json({
      status:'Fail',
      data:{
        message:err
      }
    })
  }
}

// exports.addOneData =  async function(req,res){

//   try{

//     const Data = await DemoS.create(req.body);

//     res.status(201).json({
//       status:"success",
//       data:{
//         Data
//       }
//   })
//   } catch(err){
//     res.status(400).json({
//       status:'Fail',
//       data:{
//         message:err
//       }
//     })
//   }
// }

