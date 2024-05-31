const CompanyModel = require("../models/CompanyModel");
const Factory = require('./HandlersFactory');

// @desc   Get All Company
// @route  GET api/v1/Company
// @access Public

exports.GetAllCompany = Factory.GetAll(CompanyModel)

// @desc   create Company
// @route  POST api/v1/Company
// @access Private

exports.PostCompany = Factory.createOne(CompanyModel)

// @desc   get specific Company by id 
// @route  GET api/v1/Company/:id
// @access Public 

exports.getOneCompany = Factory.getOne(CompanyModel)


// @desc   update specific Company by id 
// @route  PUT api/v1/Company/:id
// @access Private 


exports.UpdateCompany = Factory.updateOne(CompanyModel)


// @desc   delete specific Company by id 
// @route  DELETE api/v1/Company/:id
// @access Private 

exports.DeleteCompany = Factory.deleteOne(CompanyModel)



