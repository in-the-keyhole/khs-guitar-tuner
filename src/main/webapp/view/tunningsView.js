define([
	'jquery', 
	'backbone', 
	'underscore', 
	'model/tunningCollection', 
	'view/tunningsItemView',
	'text!template/tunnings.html'], 
	function($, Backbone, _, stockListCollection, ItemView, template) {
		
		var list = {};
		return Backbone.View.extend({
			id : 'tunnings-page',
			initialize : function() {
				this.collection.bind("reset", this.render, this);

									
			},
			render : function(eventName) {
				$(this.el).empty();
				_.each(this.collection.models, function(aModel) {
					$(this.el).append(new ItemView({
						model : aModel,
					}).render().el);
				}, this);
				
				
				$('#tunningsList').listview('refresh');	
				
			}
			
	
			
		});


});
