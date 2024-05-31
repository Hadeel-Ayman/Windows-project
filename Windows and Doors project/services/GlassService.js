const GlassModel = require("../models/GlassModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Glass
// @route  GET api/v1/Glass
// @access Public

exports.GetAllGlass = Factory.GetAll(GlassModel)

// @desc   create Glass
// @route  POST api/v1/Glass
// @access Private

exports.PostGlass = Factory.createOne(GlassModel)

// @desc   get specific Glass by id 
// @route  GET api/v1/Glass/:id
// @access Public 

exports.getOneGlass = Factory.getOne(GlassModel)


// @desc   update specific Glass by id 
// @route  PUT api/v1/Glass/:id
// @access Private 


exports.UpdateGlass = Factory.updateOne(GlassModel)


// @desc   delete specific Glass by id 
// @route  DELETE api/v1/Glass/:id
// @access Private 

exports.DeleteGlass = Factory.deleteOne(GlassModel)
