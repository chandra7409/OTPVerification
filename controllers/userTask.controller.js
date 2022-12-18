const userTask = require('../models/userTask');
const { userStatus } = require("../constants/constants");

exports.createSwimn = async(req, res) => {
    try {
        const data = {
            name: req.body.name,
            userId: req.body.userId,
            email: req.body.email,
            Task: req.body.Task,
        }

        const user = await userTask.create(data);


        //Now we should send the notification request to notificationService
        /**
         * Enrich the content of the email content
         */


        //console.log(`#### New userTask '${user.name}' created ####`);
        res.status(201).send(user);


    } catch (err) {
        console.log("#### Error while creating new user #### ", err);
        res.status(500).send({
            message: "Internal server error while creating new user"
        });
    }
}


exports.updateSwimn = async(req, res) => {
    try {
        const user = await userTask.findOne({ _id: req.params.id });

        user.name = req.body.name ? req.body.name : user.name,
            user.Task = req.body.Task ? req.body.Task : user.Task,
            user.eamil = req.body.eamil ? req.body.eamil : user.eamil,
            user.userStatus = req.body.userStatus ? req.body.userStatus : user.userStatus,
            user.userId = req.body.userId ? req.body.userId : user.userId
        const updateSwimn = await user.save();

        console.log(`#### userTask data updated ####`);
        res.status(200).send(updateSwimn);

    } catch (err) {
        console.log("#### Error while updating user data #### ", err.message);
        res.status(500).send({
            message: "Internal server error while updating user data"
        });
    }
}

exports.deleteSwimn = async(req, res) => {
    try {
        const user = await userTask.findOne({ _id: req.params.id });

        await user.remove();

        console.log(`#### userTask deleted ####`);
        res.status(200).send({ message: "userTask deleted" });

    } catch (err) {
        console.log("#### Error while deleting user #### ", err.message);
        res.status(500).send({
            message: "Internal server error while deleting user"
        });
    }
}