App.Router.map(function() {
	this.resource('numbers');
  this.route('number', { path: '/numbers/:numbers_id' });
  this.route('edits', { path: '/numbers/:numbers_id/edits' });
});

App.NumbersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('number');
	}
});

App.NumberRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('number', +params.numbers_id);
	}
});
App.EditsRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('number', +params.numbers_id);
	}
});
