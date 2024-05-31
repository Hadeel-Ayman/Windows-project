const FanlightModel = require("../models/FanlightModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Fanlight
// @route  GET api/v1/Fanlight
// @access Public

exports.GetAllFanlight = Factory.GetAll(FanlightModel)

// @desc   create Fanlight
// @route  POST api/v1/Fanlight
// @access Private

exports.PostFanlight = Factory.createOne(FanlightModel)

// @desc   get specific Fanlight by id 
// @route  GET api/v1/Fanlight/:id
// @access Public 

exports.getOneFanlight = Factory.getOne(FanlightModel)


// @desc   update specific Fanlight by id 
// @route  PUT api/v1/Fanlight/:id
// @access Private 


exports.UpdateFanlight = Factory.updateOne(FanlightModel)


// @desc   delete specific Fanlight by id 
// @route  DELETE api/v1/Fanlight/:id
// @access Private 

exports.DeleteFanlight = Factory.deleteOne(FanlightModel)
