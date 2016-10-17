import './register.html';

Template.regClient.events({

  'submit [name="regClientForm"]' (event) {
    event.preventDefault();

    let newClient = {};

    newClient.clientName = event.target.clientName.value;

    if (!_.isEmpty(event.target.clientType.value)) {
          newClient.clientType = event.target.clientType.value;
        }

    newClient.company = event.target.company.value;
    newClient.address = event.target.address.value;
    newClient.phone = event.target.phone.value;
    newClient.email = event.target.email.value;

    Meteor.call('clients.regClient', newClient);
    FlowRouter.go('listClients');
    toastr.success('Client Registered');

  }

});
