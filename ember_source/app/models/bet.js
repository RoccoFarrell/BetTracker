import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr(),
  participants: DS.attr(),
  pushflag: DS.attr('boolean'),
  description: DS.attr(),
  datecreated: DS.attr('date'),
  activeflag: DS.attr('boolean'),
  datesettled: DS.attr('date'),
  winner: DS.attr(),
  paidflag: DS.attr('boolean'),
  datepaid: DS.attr('date'),
  category: DS.attr()
});