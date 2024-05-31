const SizeModel = require("../models/SizeModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Size
// @route  GET api/v1/Size
// @access Public

exports.GetAllSize = Factory.GetAll(SizeModel)

// @desc   create Size
// @route  POST api/v1/Size
// @access Private

exports.PostSize = Factory.createOne(SizeModel)

// @desc   get specific Size by id 
// @route  GET api/v1/Size/:id
// @access Public 

exports.getOneSize = Factory.getOne(SizeModel)


// @desc   update specific Size by id 
// @route  PUT api/v1/Size/:id
// @access Private 


exports.UpdateSize = Factory.updateOne(SizeModel)


// @desc   delete specific Size by id 
// @route  DELETE api/v1/Size/:id
// @access Private 

exports.DeleteSize = Factory.deleteOne(SizeModel)
