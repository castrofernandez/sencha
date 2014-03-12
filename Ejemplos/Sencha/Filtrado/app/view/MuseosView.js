Ext.define('Filtros.view.MuseosView', {
    extend: 'Ext.navigation.View',
    xtype: 'museo',
    config: {
        title:'Museos',
        iconCls:'info',
        items:[
        {
            xtype: 'list',
            itemTpl: '{nombre} / Coordenadas: {localizacion}',
            store: 'museosStore',
            title: 'Museos de Gij&#243;n',
    }
        ]
    }

});
