Ext.define('Agenda.store.Contactos', {

    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.JsonP'
    ],
    config: {
        model: 'Agenda.model.Contacto',
        storeId: 'contactos',
        grouper: function(record)
        {
            var nombre = record.data.nombre[0];
            return nombre.toUpperCase();
        },
        proxy: {
            type: 'ajax',
            url: 'app/data/contactos.json',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }

});