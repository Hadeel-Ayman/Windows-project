const ProfileColorModel = require("../models/ProfileColorModel");
const Factory = require('./HandlersFactory');

// @desc   Get All ProfileColor
// @route  GET api/v1/ProfileColor
// @access Public

exports.GetAllProfileColor = Factory.GetAll(ProfileColorModel)

// @desc   create ProfileColor
// @route  POST api/v1/ProfileColor
// @access Private

exports.PostProfileColor = Factory.createOne(ProfileColorModel)

// @desc   get specific ProfileColor by id 
// @route  GET api/v1/ProfileColor/:id
// @access Public 

exports.getOneProfileColor = Factory.getOne(ProfileColorModel)


// @desc   update specific ProfileColor by id 
// @route  PUT api/v1/ProfileColor/:id
// @access Private 


exports.UpdateProfileColor = Factory.updateOne(ProfileColorModel)


// @desc   delete specific ProfileColor by id 
// @route  DELETE api/v1/ProfileColor/:id
// @access Private 

exports.DeleteProfileColor = Factory.deleteOne(ProfileColorModel)
