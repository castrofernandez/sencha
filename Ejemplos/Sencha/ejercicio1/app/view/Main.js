Ext.define('Ejercicio1.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [ {  xtype: 'titlebar',
                    docked: 'top',
                    title: 'Layouts'
                },
                { xtype: 'fit' },
                { xtype: 'hbox' },
                { xtype: 'vbox' },
                { xtype: 'card'},
                { xtype: 'docking'},
                { xtype: 'template'}
                ]
    }
});

