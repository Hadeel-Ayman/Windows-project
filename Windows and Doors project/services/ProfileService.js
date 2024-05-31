const ProfileModel = require("../models/ProfileModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Profile
// @route  GET api/v1/Profile
// @access Public

exports.GetAllProfile = Factory.GetAll(ProfileModel)

// @desc   create Profile
// @route  POST api/v1/Profile
// @access Private

exports.PostProfile = Factory.createOne(ProfileModel)

// @desc   get specific Profile by id 
// @route  GET api/v1/Profile/:id
// @access Public 

exports.getOneProfile = Factory.getOne(ProfileModel)


// @desc   update specific Profile by id 
// @route  PUT api/v1/Profile/:id
// @access Private 


exports.UpdateProfile = Factory.updateOne(ProfileModel)


// @desc   delete specific Profile by id 
// @route  DELETE api/v1/Profile/:id
// @access Private 

exports.DeleteProfile = Factory.deleteOne(ProfileModel)
