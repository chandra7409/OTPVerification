require('dotenv').config();
module.exports = {

    OTP_LENGTH: 10,
    OTP_CONFIG: {
        upperCaseAlphabets: false,
        specialChars: false,
    },
    userStatus: {
        compelete: "COMPELETE",
        incompelete: "INCOMPELETE"
    },
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Unauthorized'));
        }
    },
    MAIL_SETTINGS: {
        service: 'gmail',
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASSWORD,
        },
    },
};