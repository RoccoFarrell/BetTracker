import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
	primaryKey: '_id',
    serializeId: function(id) {
        return id.toString();
    }
});

