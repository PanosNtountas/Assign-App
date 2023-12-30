const Jobs = require('../models/jobs.model');
const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
    console.log('Find all jobs');

    try{
        const result = await Jobs.find();
        res.status(200).json({status: true, data: result});
        console.log('Success in reading all jobs');
        logger.info("Log info: success in reading all jobs");
    } catch(err){
        res.status(400).json({status: false, data: err});
        console.log('Problem in reading all jobs');
        logger.error("Log error: problem in reading all jobs");
    }
};

exports.create = async(req,res) => {
    const newJob = new Jobs({
        name: req.body.name,
        category: req.body.category
    })
    console.log(`Insert ${req.body.name} with category ${req.body.category}`);

    try{
        const result = await newJob.save();
        res.status(200).json({status: true, data: result});
        console.log('Success in inserting job');
        logger.info("Log info: success in inserting job");
    } catch(err){
        res.status(400).json({status: false, data: err});
        console.log('Problem in inserting job');
        logger.error("Log error: problem in inserting job");
    }
};

exports.delete = async(req,res) => {
    const name = req.params.name;
    console.log("Delete ", name);

    try{
        const result = await Jobs.findOneAndDelete({name: name})
        res.status(200).json({status: true, data: result});
        console.log("Success in deleting ", name);
        logger.info("Log info: success in deleting job");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem in deleting ", name);
        logger.error("Log error: problem in deleting job");
    }
};