const Persons = require('../models/persons.model');
const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
    console.log('Find all persons');

    try{
        const result = await Persons.find({});
        res.status(200).json({status: true, data: result});
        console.log('Success in reading all persons');
        logger.info("Log info: success in reading all persons");
    } catch(err){
        res.status(400).json({status: false, data: err});
        console.log('Problem in reading all persons');
        logger.error("Log error: problem in reading all persons");
    }
};

exports.create = async(req,res) => {
    const newPerson = new Persons({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        category: req.body.category,
        personID: req.body.personID
    })
    console.log(`Insert ${req.body.firstname} ${req.body.lastname} with id ${req.body.personID}`);

    try{
        const result = await newPerson.save();
        res.status(200).json({status: true, data: result});
        console.log('Success in inserting person');
        logger.info("Log info: success in inserting person");
    } catch(err){
        res.status(400).json({status: false, data: err});
        console.log('Problem in inserting person');
        logger.error("Log error: problem in inserting person");
    }
};

exports.delete = async(req,res) => {
    const personID = req.params.personID;
    console.log("Delete person with personID ", personID);

    try{
        const result = await Persons.findOneAndDelete({personID: personID})
        res.status(200).json({status: true, data: result});
        console.log("Success in deleting person with personID ", personID);
        logger.info("Log info: success in deleting person");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem in deleting person with personID ", personID);
        logger.error("Log error: problem in deleting person");
    }
};