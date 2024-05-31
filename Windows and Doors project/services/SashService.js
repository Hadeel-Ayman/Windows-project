const SashModel = require("../models/SashModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Sash
// @route  GET api/v1/Sash
// @access Public

exports.GetAllSash = Factory.GetAll(SashModel)

// @desc   create Sash
// @route  POST api/v1/Sash
// @access Private

exports.PostSash = Factory.createOne(SashModel)

// @desc   get specific Sash by id 
// @route  GET api/v1/Sash/:id
// @access Public 

exports.getOneSash = Factory.getOne(SashModel)


// @desc   update specific Sash by id 
// @route  PUT api/v1/Sash/:id
// @access Private 


exports.UpdateSash = Factory.updateOne(SashModel)


// @desc   delete specific Sash by id 
// @route  DELETE api/v1/Sash/:id
// @access Private 

exports.DeleteSash = Factory.deleteOne(SashModel)
