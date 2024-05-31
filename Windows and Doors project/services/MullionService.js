const MullionModel = require("../models/MullionModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Mullion
// @route  GET api/v1/Mullion
// @access Public

exports.GetAllMullion = Factory.GetAll(MullionModel)

// @desc   create Mullion
// @route  POST api/v1/Mullion
// @access Private

exports.PostMullion = Factory.createOne(MullionModel)

// @desc   get specific Mullion by id 
// @route  GET api/v1/Mullion/:id
// @access Public 

exports.getOneMullion = Factory.getOne(MullionModel)


// @desc   update specific Mullion by id 
// @route  PUT api/v1/Mullion/:id
// @access Private 


exports.UpdateMullion = Factory.updateOne(MullionModel)


// @desc   delete specific Mullion by id 
// @route  DELETE api/v1/Mullion/:id
// @access Private 

exports.DeleteMullion = Factory.deleteOne(MullionModel)
