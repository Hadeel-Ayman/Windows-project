const LayoutModel = require("../models/LayoutModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Layout
// @route  GET api/v1/Layout
// @access Public

exports.GetAllLayout = Factory.GetAll(LayoutModel)

// @desc   create Layout
// @route  POST api/v1/Layout
// @access Private

exports.PostLayout = Factory.createOne(LayoutModel)

// @desc   get specific Layout by id 
// @route  GET api/v1/Layout/:id
// @access Public 

exports.getOneLayout = Factory.getOne(LayoutModel)


// @desc   update specific Layout by id 
// @route  PUT api/v1/Layout/:id
// @access Private 


exports.UpdateLayout = Factory.updateOne(LayoutModel)


// @desc   delete specific Layout by id 
// @route  DELETE api/v1/Layout/:id
// @access Private 

exports.DeleteLayout = Factory.deleteOne(LayoutModel)
