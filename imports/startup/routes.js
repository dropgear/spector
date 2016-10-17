FlowRouter.route('/', {
	name: 'home',
	action () {
		BlazeLayout.render('home');
	}
});

FlowRouter.route('/supports/register', {
	name: 'regClient',
	action () {
		BlazeLayout.render('regClient');
	}
});

FlowRouter.route('/supports/list', {
	name: 'listClients',
	action () {
		BlazeLayout.render('listClients');
	}
});

FlowRouter.route('/supports/edit/:id', {
	name: 'editClient',
	action () {
		BlazeLayout.render('editClient');
	}
});
