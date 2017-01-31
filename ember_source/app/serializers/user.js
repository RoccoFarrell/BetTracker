import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    	console.log(store + primaryModelClass + payload + id + requestType);
    	console.log("payload: " + payload);
    	console.log(payload);

    	var json_converted = payload[0];

    	json_converted.data.id=json_converted.id;
    	json_converted.data.type="user";

    	delete json_converted.id;

    	console.log(json_converted);
    	return json_converted;
  },
});
