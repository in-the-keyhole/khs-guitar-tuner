define([
	'jquery', 
	'backbone', 
	'underscore', 
	'text!template/tunning-detail-image.html'
	
	], 
	function($, Backbone, _, template) {
		
	
		return Backbone.View.extend({
			id : 'tunnings-details-page',
			initialize : function() {
			  this.model =   window.tunnings.routers.workspaceRouter.tunning;
			  
				$("back").on("click", function(e){				
					back(e);					
					e.preventDefault();//don't let the original href continue with navigation
		        	e.stopPropagation();
					return false;
				});
				
				$("content").bind("swipeleft", function() { window.tunnings.routers.workspaceRouter.navigate("#index",true); });
			
				
			
			},
		
			events: {
			      "click #back" : "back",
	
			
			    },
			
		  back : function(e){			  
			  		window.tunnings.routers.workspaceRouter.navigate("#index",true);
			    	return false;
			},
			
  
			render : function(eventName) {
				
				var compiled_template = _.template(template);
				var $el = $(this.el);	
				$el.html(compiled_template(this.model.toJSON()) );								
			
				
				return this;
			},
		});

});



