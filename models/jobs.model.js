const mongoose = require("mongoose");
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;

let jobsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required field"],
        unique: 'Two jobs cannot share the same name ({VALUE})',
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
    }
}, {collection: "jobs", timestamps: true});

jobsSchema.plugin(beautifyUnique);

module.exports = mongoose.model("Jobs", jobsSchema);