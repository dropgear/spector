import { Clients } from './clients';

Meteor.methods({

  'clients.regClient' (newClient) {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized');}

    newClient.owner = Meteor.userId();
    newClient.createdAt = new Date();

    Clients.insert(newClient);
  },

  'clients.removeClient' (id) {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized');}

    Clients.remove({ _id: id, owner: this.userId});
  }

});
