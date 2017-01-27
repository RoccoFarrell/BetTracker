var config = require('../../config');
var mongoose = require('mongoose');

var Bet = require('../models/bet');
var User = require('../models/user');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.route('/bets')
		.get(function(req,res){
			
			Bet.find(function(err, bets){
				console.log("mongoose: " + mongoose.connection.readyState);
				if(err) res.send(err);
				//broken for now \/ \/ \/ 
				var newBets = {data: [{id: bets[0]._id, type: "bet", attributes: {bets}}]};
				console.log("newBets: " + JSON.stringify(newBets));
				res.json(newBets);
				});
		});

	apiRouter.route('/users')
		.get(function(req,res){
			User.find(function(err, users){
				console.log("mongoose: " + mongoose.connection.readyState);
				console.log(users);
				if(err) res.send(err);
				var newUsers = {data: [{id: users[0]._id, type: "user", attributes: {username: users[0].username.toString()}}]};
				console.log("newUsers: " + JSON.stringify(newUsers));
				res.json(newUsers);
				
				});
		});
			
	return apiRouter;
};