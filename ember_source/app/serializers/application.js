import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	/*
	primaryKey: '_id',
    serializeId: function(id) {
    	console.log("id: " + id);
        return id.toString();
    },
    
    id: DS.attr('_id'),
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    	console.log(store + primaryModelClass + payload + id + requestType);
    	console.log(payload);

    	var json_converted = {"data": payload};
    	console.log(json_converted);
    	return json_converted;
  },
  */
  serialize(snapshot, options) {
    var json = this._super(...arguments);

    console.log(json);

    return json;
  }
});
