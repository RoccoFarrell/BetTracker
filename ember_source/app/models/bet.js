import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  datecreated: DS.attr('date'),
  datesettled: DS.attr('date'),
  datepaid: DS.attr('date'),
  amount: DS.attr(),
  category: DS.attr(),
  participants: DS.attr()
});