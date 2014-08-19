    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
            Backbone.on('user-mostrar', function(params) {
                self.mostrar(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            alert('saved model: '+JSON.stringify(model));
        },
        
        mostrar: function(){
            this.userModel = new App.Model.UserModel();
            this.imprimir();
        },
        cancel: function(){
            alert('Cancel');
        },
        
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        },
        
        imprimir: function() {
			this.userModel = new App.Model.UserModel();		
			var model = $('#userForm').serializeObject();    
			
			var x=JSON.stringify(model); 
		        document.writeln("Los datos que usted ingreso son:");
			document.writeln(x);	
			this.userModel = new App.Model.UserModel();
			this._renderEdit();
			
			
		
        }
        
    });