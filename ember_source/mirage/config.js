export default function() {
  this.namespace = '/api';

  this.get('/bets', function() {
    return {
      data: [{
        type: 'bet',
        _id: '1010102093029130',
        attributes: {
        description: 'zeke tears acl',
        datecreated: '05/05/2016',
        datesettled: '2012-04-23T18:25:43.511Z',
        datepaid: '2012-04-23T18:25:43.511Z',
        amount: '20.00',
        category: 'sports',
        participants: [
          'user1001001',
          'user1001002'
        ]}}, 
        {
        type: 'bet',        
        _id: '1010102093029131',
        attributes: {
        description: 'robots in 2018',
        datecreated: '2012-04-23T18:25:43.511Z',
        datesettled: '2012-04-23T18:25:43.511Z',
        datepaid: '2012-04-23T18:25:43.511Z',
        amount: '40.00',
        category: 'personal',
        participants: [
          'user1001003',
          'user1001004'
      ]}}]
    };
  });
}