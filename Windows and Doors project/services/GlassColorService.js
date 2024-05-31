const GlassColorModel = require("../models/GlassColorModel");
const Factory = require('./HandlersFactory');

// @desc   Get All GlassColor
// @route  GET api/v1/GlassColor
// @access Public

exports.GetAllGlassColor = Factory.GetAll(GlassColorModel)

// @desc   create GlassColor
// @route  POST api/v1/GlassColor
// @access Private

exports.PostGlassColor = Factory.createOne(GlassColorModel)

// @desc   get specific GlassColor by id 
// @route  GET api/v1/GlassColor/:id
// @access Public 

exports.getOneGlassColor = Factory.getOne(GlassColorModel)


// @desc   update specific GlassColor by id 
// @route  PUT api/v1/GlassColor/:id
// @access Private 


exports.UpdateGlassColor = Factory.updateOne(GlassColorModel)


// @desc   delete specific GlassColor by id 
// @route  DELETE api/v1/GlassColor/:id
// @access Private 

exports.DeleteGlassColor = Factory.deleteOne(GlassColorModel)
