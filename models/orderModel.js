const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const moneySchema = new Schema({
    amount: { type: Number, default: 0 },
    type: { type: String, default: 'app' }
});

const user = new Schema(
    {
        id: { type: ObjectId },
        name: { type: String },
        email: { type: String },
        sdt: { type: String },
        username: { type: String },
        password: { type: String },
        avatar: { type: String },
        birthDayOf: { type: String },
        money: [moneySchema],
        addressAll: [
            {
                id: { type: ObjectId },
                name: { type: String },
                phone: { type: String },
                address: [
                    {
                        id: { type: ObjectId },
                        name: { type: String },
                    }
                ],
                typeAddress: { type: String, default: 'Nhà' },
                default: { type: Boolean, default: false }
            },
        ],
        role: { type: String, default: 'customer' },
    },
);

module.exports =
    mongoose.models.user || mongoose.model("user", user);