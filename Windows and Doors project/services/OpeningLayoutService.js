const OpeningLayoutModel = require("../models/OpeningLayoutModel");
const Factory = require('./HandlersFactory');

// @desc   Get All OpeningLayout
// @route  GET api/v1/OpeningLayout
// @access Public

exports.GetAllOpeningLayout = Factory.GetAll(OpeningLayoutModel)

// @desc   create OpeningLayout
// @route  POST api/v1/OpeningLayout
// @access Private

exports.PostOpeningLayout = Factory.createOne(OpeningLayoutModel)

// @desc   get specific OpeningLayout by id 
// @route  GET api/v1/OpeningLayout/:id
// @access Public 

exports.getOneOpeningLayout = Factory.getOne(OpeningLayoutModel)


// @desc   update specific OpeningLayout by id 
// @route  PUT api/v1/OpeningLayout/:id
// @access Private 


exports.UpdateOpeningLayout = Factory.updateOne(OpeningLayoutModel)


// @desc   delete specific OpeningLayout by id 
// @route  DELETE api/v1/OpeningLayout/:id
// @access Private 

exports.DeleteOpeningLayout = Factory.deleteOne(OpeningLayoutModel)
