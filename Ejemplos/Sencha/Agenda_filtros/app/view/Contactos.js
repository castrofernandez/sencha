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
                ui: 'dark',
                items: [{
	                xtype: 'button',
	                text: 'Familia',
	                cls: 'familia'
                },
                {
	                xtype: 'button',
	                text: 'Amigos',
	                cls: 'amigos'
                },
                {
	                xtype: 'button',
	                text: 'Todos',
	                cls: 'todos'
                }
                ]
            },
            {
                xtype: 'listado'
            }
        ]
    }

});