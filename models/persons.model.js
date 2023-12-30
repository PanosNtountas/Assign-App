const mongoose = require("mongoose");
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;

let personsSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required field"],
        max: 20,
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, "Lastname is required field"],
        max: 20,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: [true, "Category is required field"],
        max: 30,
        trim: true,
        lowercase: true
    },
    personID: {
        type: String,
        required: [true, "ProductID is required field"],
        max: 10,
        unique: 'Two persons cannot share the same personID ({VALUE})',
        trim: true,
        lowercase: true
    }
}, {collection: "persons", timestamps: true});

personsSchema.plugin(beautifyUnique);

module.exports = mongoose.model("Persons", personsSchema);