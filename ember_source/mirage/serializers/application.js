import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
	serialize(snapshot, options) {
    var json = this._super(...arguments);

    console.log(json);

    return json;
  },
});

