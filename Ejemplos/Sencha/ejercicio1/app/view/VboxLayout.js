Ext.define("Ejercicio1.view.VboxLayout", {
    extend: 'Ext.Panel',
    alias: 'widget.vbox',
    config: {
        title: 'Vbox',
        iconCls: 'locate',
         defaults: {
            margin: 10
        },
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'component',
            flex: 1,
            html: 'Flex: 1',
            style: 'background-color: pink'
        }, {
            xtype: 'component',
            flex: 3,
            html: 'Flex: 3',
            style: 'background-color: lightblue'
        }]
    }
});
