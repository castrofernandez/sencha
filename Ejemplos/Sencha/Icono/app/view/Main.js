Ext.define('Icono.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Televisión',
                iconCls: 'tv',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Icono 1'
                },

                html: "Icono de televisión"
            },
            {
                title: 'Lápiz',
                iconCls: 'lapiz',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Icono 2'
                },

                html: "Icono de lápiz"
            },
            {
                title: 'Lápiz',
                iconCls: 'corazon',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Icono 2'
                },

                html: "Icono de lápiz"
            }
        ]
    }
});

