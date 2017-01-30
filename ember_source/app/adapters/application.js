import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  /*
  namespace: 'api',
  //host: 'http://localhost:4200',
  primaryKey: 'id',
  host: 'https://localhost:4200'
  */
});

import FirebaseAdapter from 'emberfire/adapters/firebase';
export default FirebaseAdapter.extend({
	function(payload){
		console.log(payload);
	}
});