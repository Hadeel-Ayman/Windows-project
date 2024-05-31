const CuttingProcessModel = require("../models/CuttingProcessModel");
const Factory = require('./HandlersFactory');

// @desc   Get All CuttingProcess
// @route  GET api/v1/CuttingProcess
// @access Public

exports.GetAllCuttingProcess = Factory.GetAll(CuttingProcessModel)

// @desc   create CuttingProcess
// @route  POST api/v1/CuttingProcess
// @access Private

exports.PostCuttingProcess = Factory.createOne(CuttingProcessModel)

// @desc   get specific CuttingProcess by id 
// @route  GET api/v1/CuttingProcess/:id
// @access Public 

exports.getOneCuttingProcess = Factory.getOne(CuttingProcessModel)


// @desc   update specific CuttingProcess by id 
// @route  PUT api/v1/CuttingProcess/:id
// @access Private 


exports.UpdateCuttingProcess = Factory.updateOne(CuttingProcessModel)


// @desc   delete specific CuttingProcess by id 
// @route  DELETE api/v1/CuttingProcess/:id
// @access Private 

exports.DeleteCuttingProcess = Factory.deleteOne(CuttingProcessModel)
