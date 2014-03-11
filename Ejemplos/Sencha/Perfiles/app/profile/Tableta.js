Ext.define('Perfiles.profile.Tableta', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        models: [],
        views: [],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Tablet;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Vista de tableta',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Test',
                    listeners: {
                        tap: function() {
                            Ext.Msg.alert('Perfil de tableta');
                        }
                    }
                }]
            }]
        });
        
        console.log('Launch de tableta');
    }
});

