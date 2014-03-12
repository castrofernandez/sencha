Ext.define('Filtros.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar',
               'Ext.dataview.List',
               'Ext.data.proxy.JsonP',
               'Ext.Map'],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
            xtype:'museo'
        }

        ]
    }
});
