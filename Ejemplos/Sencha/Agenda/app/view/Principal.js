Ext.define('Agenda.view.Principal', {

    extend: 'Ext.tab.Panel',
    xtype: 'principal',
    id: 'principal',

    config: {
        tabBar: {
            defaults: {
                flex: 1
            },
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        items: [
            {
                title: 'Contactos',
                iconCls: 'home',
                xtype: 'contactos'
            },
            {
                title: 'Información de contacto',
                hidden: true,
                xtype: 'detalles'
            }
        ]
    }

});