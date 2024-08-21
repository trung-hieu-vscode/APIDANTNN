const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const PetSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    idspecies: { type: ObjectId, ref: "specie" },
    alike: { type: String, required: true },
    yearold: { type: Number, required: true },
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
    describe: { type: String, required: true },
    image: { type: Array },
    idUser: { type: ObjectId, ref: "user" },
    status: { type: String, required: true },
});

module.exports = mongoose.model.pet || mongoose.model('pet', PetSchema);