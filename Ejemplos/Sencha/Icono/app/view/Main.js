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
                    title: 'Icono 1',
                    cls: 'barra'
                },

                html: "<p class='descripcion'>Icono de Televisión</p>"
            },
            {
                title: 'Lápiz',
                iconCls: 'lapiz',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Icono 2',
                    cls: 'barra'
                },

                html: "<p class='descripcion'>Icono de Lápiz</p>"
            },
            {
                title: 'Corazón',
                iconCls: 'corazon',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Icono 3',
                    cls: 'barra'
                },

                html: "<p class='descripcion'>Icono de Corazón</p>"
            }
        ]
    }
});

