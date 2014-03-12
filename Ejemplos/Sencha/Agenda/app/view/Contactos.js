Ext.define('Agenda.view.Contactos', {

    extend: 'Ext.Container',
    xtype: 'contactos',

    config: {
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                title: 'Contactos',
                docked: 'top',
                ui: 'dark'
            },
            {
                xtype: 'listado'
            }
        ]
    }

});