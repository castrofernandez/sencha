Ext.application({
    name: 'Agenda',
    views: [
        'Principal',
        'Contactos',
        'Listado',
        'Detalles'
    ],

    models: [
        'Contacto'
    ],
    controllers: [
        'Contactos'
    ],
    stores: [
        'Contactos'
    ],

    launch: function()
    {
        Ext.Viewport.add({
            xclass: 'Agenda.view.Principal'
        });
    }

});