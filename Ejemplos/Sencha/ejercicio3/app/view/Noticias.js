Ext.define('Ejercicio3.view.Noticias', {
    extend: 'Ext.navigation.View',
    xtype: 'noticias',
    config: {
        title: 'Noticias',
        iconCls: 'bookmarks',
        items: [
        {
            xtype: 'list',
            itemTpl: '<span>{title}</span>',
            store: 'noticiaStore',
            title: 'Noticias'
        }
        ]
    }

});
