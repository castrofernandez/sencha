Ext.define('Ejercicio3.view.Contenedores', {
    extend: 'Ext.navigation.View',
    xtype: 'contenedorRopa',
    config: {
        title:'Contendores',
        iconCls:'locate',
        items:[
        {
            xtype: 'list',
            itemTpl: '{lugar}',
            store: 'contenedores',
            title: 'Contendores de Ropa',
    }
        ]
    }

});
