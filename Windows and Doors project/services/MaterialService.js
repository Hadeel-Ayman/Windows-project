const MaterialModel = require("../models/MaterialModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Materials
// @route  GET api/v1/Material
// @access Public

exports.GetAllMaterials = Factory.GetAll(MaterialModel)

// @desc   create Material
// @route  POST api/v1/Materials
// @access Private

exports.PostMaterial = Factory.createOne(MaterialModel)

// @desc   get specific Materials by id 
// @route  GET api/v1/Materials/:id
// @access Public 

exports.getOneMaterial = Factory.getOne(MaterialModel)


// @desc   update specific Materials by id 
// @route  PUT api/v1/Materials/:id
// @access Private 


exports.UpdateMaterial = Factory.updateOne(MaterialModel)


// @desc   delete specific Materials by id 
// @route  DELETE api/v1/Materials/:id
// @access Private 

exports.DeleteMaterial = Factory.deleteOne(MaterialModel)
