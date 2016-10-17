import './edit.html';

import { Clients } from '../../api/clients';

Template.editClient.onCreated(function () {
  let docId = FlowRouter.getParam('id');
  this.autorun(() => {
    this.subscribe('singleClient', docId);
  });
});

Template.editClient.helpers({
  'client' () {
    let docId = FlowRouter.getParam('id');
    return Clients.findOne(docId);
  }
});
