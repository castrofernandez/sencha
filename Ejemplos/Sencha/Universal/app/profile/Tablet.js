Ext.define('Universal.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        models: [],
        views: ['AkoLib.view.SplitView'],
        controllers: ['TabletController']
    },
    isActive: function () {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'akosplitview',
            screenTitle: 'Universal App',
            menuButtonTitle: 'Menu',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Seleccione un elemento de la lista'
            },
            showToggleButton: true,
            collapsesMasterView: true,
            listeners: {
                masterviewshow: function (splitview) {
                    console.log('masterviewshow handler in the launch() function');
                }
            }
        });
    }
});

