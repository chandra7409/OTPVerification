const mongoose = require("mongoose");
const constant = require("../constants/constants");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    Task: {
        type: String,
        required: true

    },

    userStatus: {
        type: String,
        required: true,
        default: constant.user,
        enum: [constant.COMPLETE,
            constant.INCOMPLETE

        ],
    }

}, { timestamps: true, versionKey: false })
const userTask = mongoose.model('userTask', userSchema);

module.exports = userTask;