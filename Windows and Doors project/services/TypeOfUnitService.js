const TypeOfUnitModel = require("../models/TypeOfUnitModel");
const Factory = require('./HandlersFactory');

// @desc   Get All TypeOfUnit
// @route  GET api/v1/TypeOfUnit
// @access Public

exports.GetAllTypeOfUnit = Factory.GetAll(TypeOfUnitModel)

// @desc   create TypeOfUnit
// @route  POST api/v1/TypeOfUnit
// @access Private

exports.PostTypeOfUnit = Factory.createOne(TypeOfUnitModel)

// @desc   get specific TypeOfUnit by id 
// @route  GET api/v1/TypeOfUnit/:id
// @access Public 

exports.getOneTypeOfUnit = Factory.getOne(TypeOfUnitModel)


// @desc   update specific TypeOfUnit by id 
// @route  PUT api/v1/TypeOfUnit/:id
// @access Private 


exports.UpdateTypeOfUnit = Factory.updateOne(TypeOfUnitModel)


// @desc   delete specific TypeOfUnit by id 
// @route  DELETE api/v1/TypeOfUnit/:id
// @access Private 

exports.DeleteTypeOfUnit = Factory.deleteOne(TypeOfUnitModel)
