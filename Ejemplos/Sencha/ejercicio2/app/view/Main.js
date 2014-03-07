Ext.define('Ejercicio2.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar', 'Ext.carousel.Carousel',
    'Ext.ActionSheet','Ext.picker.Picker'],
    config: {
        tabBarPosition: 'bottom',

        items: [

            {
                xtype: 'buttons1',
                scrollable: true
            },
            {
                xtype:'mycarousel',
            },
             {
                xtype:'mypanel',
                scrollable: true
            },
            {
                xtype: 'mymap'
            }
                       ]
    }
});
