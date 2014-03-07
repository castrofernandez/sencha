Ext.define('Ejercicio3.view.MuseosView', {
    extend: 'Ext.navigation.View',
    xtype: 'museo',
    config: {
        title:'Museos',
        iconCls:'info',
        items:[
        {
            xtype: 'list',
            itemTpl: '{nombre}',
            store: 'museosStore',
            title: 'Museos de Gij&#243;n',
    }
        ]
    }

});
