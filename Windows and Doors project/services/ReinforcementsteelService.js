const ReinforcementsteelModel = require("../models/ReinforcementsteelModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Reinforcementsteel
// @route  GET api/v1/Reinforcementsteel
// @access Public

exports.GetAllReinforcementsteel = Factory.GetAll(ReinforcementsteelModel)

// @desc   create Reinforcementsteel
// @route  POST api/v1/Reinforcementsteel
// @access Private

exports.PostReinforcementsteel = Factory.createOne(ReinforcementsteelModel)

// @desc   get specific Reinforcementsteel by id 
// @route  GET api/v1/Reinforcementsteel/:id
// @access Public 

exports.getOneReinforcementsteel = Factory.getOne(ReinforcementsteelModel)


// @desc   update specific Reinforcementsteel by id 
// @route  PUT api/v1/Reinforcementsteel/:id
// @access Private 


exports.UpdateReinforcementsteel = Factory.updateOne(ReinforcementsteelModel)


// @desc   delete specific Reinforcementsteel by id 
// @route  DELETE api/v1/Reinforcementsteel/:id
// @access Private 

exports.DeleteReinforcementsteel = Factory.deleteOne(ReinforcementsteelModel)
