import { Meteor } from 'meteor/meteor';

import { Clients } from '../imports/api/clients';
import '../imports/api/methods';

Meteor.publish('clients', function () {
  return Clients.find({ owner: this.userId });
});

Meteor.publish('singleClient', function (id) {
  return Clients.find({ _id: id, owner: this.userId});
});
