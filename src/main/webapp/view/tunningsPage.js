define([
	'jquery', 
	'backbone', 
	'underscore', 
	'model/tunningCollection', 
	'view/tunningsView',
	'text!template/tunnings.html'], 
	function($, Backbone, _, ReferenceCollection, TunningsView, template) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'tunnings-entries-page',
			initialize : function() {
				this.list = new ReferenceCollection();		
			},
		
			render : function(eventName) {
				var compiled_template = _.template(template);
				var $el = $(this.el);
				$el.html(compiled_template());
				this.listView = new TunningsView({
					el : $('ul', this.el),
					collection : this.list
				});
				this.listView.render();
				return this;
			},
		});

});
