Ext.define('Agenda.store.Contactos', {

    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP'
    ],
    config: {
        model: 'Agenda.model.Contacto',
        grouper: function(record)
        {
        	var nombre = "";
        	
        	if (record.data.nombre && record.data.nombre.length >= 1)
            	nombre = record.data.nombre[0];
            	
            return nombre.toUpperCase();
        },
        proxy: {
            type: 'jsonp',
            url: 'http://juancastro.es/pruebas/contactos.json',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'contactos'
            }
        },
        autoLoad: true
    }

});

/* Datos locales

        proxy: {
            type: 'ajax',
            url: 'app/data/contactos.json',
            reader: {
                type: 'json'
            }
        },
*/