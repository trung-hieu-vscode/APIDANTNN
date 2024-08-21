const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const SpecieSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    idCategory: { type: ObjectId, ref: "category" },
});

module.exports = mongoose.model.specie || mongoose.model('specie', SpecieSchema);