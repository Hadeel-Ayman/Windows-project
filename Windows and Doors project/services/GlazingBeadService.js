const GlazingBeadModel = require("../models/GlazingBeadModel");
const Factory = require('./HandlersFactory');

// @desc   Get All GlazingBead
// @route  GET api/v1/GlazingBead
// @access Public

exports.GetAllGlazingBead = Factory.GetAll(GlazingBeadModel)

// @desc   create GlazingBead
// @route  POST api/v1/GlazingBead
// @access Private

exports.PostGlazingBead = Factory.createOne(GlazingBeadModel)

// @desc   get specific GlazingBead by id 
// @route  GET api/v1/GlazingBead/:id
// @access Public 

exports.getOneGlazingBead = Factory.getOne(GlazingBeadModel)


// @desc   update specific GlazingBead by id 
// @route  PUT api/v1/GlazingBead/:id
// @access Private 


exports.UpdateGlazingBead = Factory.updateOne(GlazingBeadModel)


// @desc   delete specific GlazingBead by id 
// @route  DELETE api/v1/GlazingBead/:id
// @access Private 

exports.DeleteGlazingBead = Factory.deleteOne(GlazingBeadModel)
