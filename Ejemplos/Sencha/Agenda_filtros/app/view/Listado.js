Ext.define('Agenda.view.Listado', {

    extend: 'Ext.dataview.List',
    xtype: 'listado',
    id: 'lista-contactos',

    config: {
        emptyText: 'No hay contactos',
        grouped: true,
        pinHeaders: true,
        itemTpl: '{nombre} {apellidos} ({grupo})',
        store: 'contactos'
    }

});