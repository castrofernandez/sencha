Ext.define('Perfiles.profile.Escritorio', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Desktop',
        models: [],
        views: [],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Desktop;
    },
    launch: function () {
    	console.log('Launch de escritorio');
    
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Vista de escritorio',
            items: [{
                xtype: 'toolbar',
                docked: 'bottom',
                items: [{
                    xtype: 'button',
                    text: 'Probar',
                    listeners: {
                        tap: function() {
                            Ext.Msg.alert('Perfil de escritorio');
                        }
                    }
                }]
            }]
        });
    }
});

