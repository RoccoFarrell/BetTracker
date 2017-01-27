var config = require('../../config');

var Bet = require('../models/bet');

module.exports = function(app, express) {
	var apiRouter = express.Router();

	apiRouter.route('/bets')
		.get(function(req,res){
			Bet.find(function(err, bets){
				if(err) res.send(err);
				res.json(bets);
				console.log(bets);
				});
		});

	return apiRouter;
};