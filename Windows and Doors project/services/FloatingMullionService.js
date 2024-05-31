const FloatingMullionModel = require("../models/FloatingMullionModel");
const Factory = require('./HandlersFactory');

// @desc   Get All FloatingMullionModel
// @route  GET api/v1/FloatingMullionModel
// @access Public

exports.GetAllFloatingMullion = Factory.GetAll(FloatingMullionModel)

// @desc   create FloatingMullionModel
// @route  POST api/v1/FloatingMullionModel
// @access Private

exports.PostFloatingMullion = Factory.createOne(FloatingMullionModel)

// @desc   get specific FloatingMullionModel by id 
// @route  GET api/v1/FloatingMullionModel/:id
// @access Public 

exports.getOneFloatingMullion = Factory.getOne(FloatingMullionModel)


// @desc   update specific FloatingMullionModel by id 
// @route  PUT api/v1/FloatingMullionModel/:id
// @access Private 


exports.UpdateFloatingMullion = Factory.updateOne(FloatingMullionModel)


// @desc   delete specific FloatingMullionModel by id 
// @route  DELETE api/v1/FloatingMullionModel/:id
// @access Private 

exports.DeleteFloatingMullion = Factory.deleteOne(FloatingMullionModel)
