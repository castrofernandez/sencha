Ext.define('Agenda.controller.Contactos', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	listado: 'listado',
            principal: 'principal',
            familia: "button[cls=familia]",
            amigos: "button[cls=amigos]",
            todos: "button[cls=todos]"
        },
        control: {
            listado: {
                itemtap: "deseleccionar",
                select: "mostrar",
                
            },
            familia: {
	            tap: "pulsarFamilia"
            },
            amigos: {
	            tap: "pulsarAmigos"
            },
            todos: {
	            tap: "pulsarTodos"
            }
        }
    },

    deseleccionar: function(dv, index, item, e) {
        setTimeout(function(){
            dv.deselect(index);
        }, 0);
    },

    mostrar: function(list, record) {
        var Principal = this.getPrincipal();
        Principal.setActiveItem(1);
        
        Ext.getCmp('formulario-contacto').setRecord(record);
    },
    
    pulsarFamilia: function() {
	    console.log('familia');
	    
	    var store = Ext.getStore('contactos');
	    
	    store.clearFilter();
	    store.filter('grupo', 'familia');
    },
    
    pulsarAmigos: function() {
	    console.log('amigos');
	    
	    var store = Ext.getStore('contactos');
	    
	    store.clearFilter();
	    store.filter('grupo', 'amigos');
    },
    
    pulsarTodos: function() {
	    console.log('todos');
	    
	    var store = Ext.getStore('contactos');
	    
	    store.clearFilter();
    }

});