// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

// user schema
var BetSchema = new Schema({
	type: { type: String, required: true},
		description: { type: String, required: true},
		datecreated: { type: String, required: true},
		datesettled: { type: String, required: true},
		datepaid: { type: String, required: true},
		amount: { type: String, required: true},
		category: { type: String, required: true},
		participants: [{
			participantID: { type: Schema.ObjectId }
		}]
});

// return the model
module.exports = mongoose.model('Bet', BetSchema);
