define(['jquery', 'backbone', 'underscore', 'model/tunningModel'], 
function($, Backbone, _, CategoryModel) {
	return Backbone.Collection.extend({
		model : CategoryModel,
		url : 'sherpa/tunnings',
		initialize : function() {
			$.mobile.showPageLoadingMsg();
			console.log('Tunnings url:' + this.url);
			this.loadTunnings();
			//var data = this.localGet();
			
		},
		loadTunnings : function() {
			var self = this;
			$.getJSON(this.url, {
				}).success(function(data, textStatus, xhr) {
					console.log('tunnings json success');
					console.log(JSON.stringify(data));
					self.reset(data);
					self.localSave(data);
				}).error(function(data, textStatus, xhr) {
					console.log('error');
					console.log("data - " + JSON.stringify(data));
					console.log("textStatus - " + textStatus);
					console.log("xhr - " + JSON.stringify(xhr));
				}).complete(function() {
					console.log('json request complete');
					$.mobile.hidePageLoadingMsg();
				});
		},
		localSave : function(data) {
			var d = JSON.stringify(data);
			localStorage.setItem('TUNNINGS', d);
		},
		localGet : function() {			
			var d = localStorage.getItem('TUNNINGS');
		    data = JSON.parse(d);
		    return data;
	   },
	   localRemove : function(model){  
		   var target = this.models;
		   var f = function(m) { 	  
		   return m.toJSON().ticker == model.toJSON().ticker};
		   var result = _.reject(target,f);
		   this.localSave(result);
	   }
	   
				
	});
});
