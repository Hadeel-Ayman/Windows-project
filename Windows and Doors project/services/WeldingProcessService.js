const WeldingProcessModel = require("../models/WeldingProcessModel");
const Factory = require('./HandlersFactory');

// @desc   Get All WeldingProcess
// @route  GET api/v1/WeldingProcess
// @access Public

exports.GetAllWeldingProcess = Factory.GetAll(WeldingProcessModel)

// @desc   create WeldingProcess
// @route  POST api/v1/WeldingProcess
// @access Private

exports.PostWeldingProcess = Factory.createOne(WeldingProcessModel)

// @desc   get specific WeldingProcess by id 
// @route  GET api/v1/WeldingProcess/:id
// @access Public 

exports.getOneWeldingProcess = Factory.getOne(WeldingProcessModel)


// @desc   update specific WeldingProcess by id 
// @route  PUT api/v1/WeldingProcess/:id
// @access Private 


exports.UpdateWeldingProcess = Factory.updateOne(WeldingProcessModel)


// @desc   delete specific WeldingProcess by id 
// @route  DELETE api/v1/WeldingProcess/:id
// @access Private 

exports.DeleteWeldingProcess = Factory.deleteOne(WeldingProcessModel)
