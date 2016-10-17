import './list.html';

import { Clients } from '../../api/clients';

Template.listClients.onCreated(() => {
  Meteor.subscribe('clients');
});

Template.listClients.helpers({
  'clients' () {
    return Clients.find({}, { sort: { clientName: 1 } });
  }
});

Template.listClients.events({
  'click [data-remove="client"]' () {
    Meteor.call('clients.removeClient', this._id);
    toastr.info('Client was removed');
  }
});
