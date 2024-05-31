const FrameModel = require("../models/FrameModel.js");
const Factory = require('./HandlersFactory');

// @desc   Get All Frames
// @route  GET api/v1/Frame
// @access Public

exports.GetAllFrames = Factory.GetAll(FrameModel)

// @desc   create Frame
// @route  POST api/v1/Frames
// @access Private

exports.PostFrame = Factory.createOne(FrameModel)

// @desc   get specific Frames by id 
// @route  GET api/v1/Frames/:id
// @access Public 

exports.getOneFrame = Factory.getOne(FrameModel)


// @desc   update specific Frames by id 
// @route  PUT api/v1/Frames/:id
// @access Private 


exports.UpdateFrame = Factory.updateOne(FrameModel)


// @desc   delete specific Frames by id 
// @route  DELETE api/v1/Frames/:id
// @access Private 

exports.DeleteFrame = Factory.deleteOne(FrameModel)
