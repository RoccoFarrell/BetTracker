// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

// user schema
var UserSchema = new Schema({
	username: { type: String, required: true}
});

// return the model
module.exports = mongoose.model('User', UserSchema);