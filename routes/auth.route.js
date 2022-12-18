const authController = require('../controllers/auth.controller');
module.exports = (app) => {
    app.post('/', authController.signUpUser);
    app.post('/verify', authController.verifyEmail);
}