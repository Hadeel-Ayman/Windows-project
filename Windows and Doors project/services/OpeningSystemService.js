const OpeningSystemModel = require("../models/OpeningSystemModel");
const Factory = require('./HandlersFactory');

// @desc   Get All OpeningSystem
// @route  GET api/v1/OpeningSystem
// @access Public

exports.GetAllOpeningSystem = Factory.GetAll(OpeningSystemModel)

// @desc   create OpeningSystem
// @route  POST api/v1/OpeningSystem
// @access Private

exports.PostOpeningSystem = Factory.createOne(OpeningSystemModel)

// @desc   get specific OpeningSystem by id 
// @route  GET api/v1/OpeningSystem/:id
// @access Public 

exports.getOneOpeningSystem = Factory.getOne(OpeningSystemModel)


// @desc   update specific OpeningSystem by id 
// @route  PUT api/v1/OpeningSystem/:id
// @access Private 


exports.UpdateOpeningSystem = Factory.updateOne(OpeningSystemModel)


// @desc   delete specific OpeningSystem by id 
// @route  DELETE api/v1/OpeningSystem/:id
// @access Private 

exports.DeleteOpeningSystem = Factory.deleteOne(OpeningSystemModel)
