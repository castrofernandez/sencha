Ext.define('Perfiles.profile.Telefono', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'telefono',
        models: [],
        views: ['VistaTelefono'],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'vistatelefono'
        });
        
        console.log('Launch de teléfono');
    }
});

