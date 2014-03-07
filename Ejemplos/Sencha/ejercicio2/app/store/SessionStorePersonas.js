Ext.define('Ejercicio2.store.StorePersonas', {
    extend: 'Ext.data.Store',
    xtype: 'store_personas',
    config: {
        model: 'Ejercicio2.model.Personas',
        storeId: 'storePersonas',
        autoLoad: true,
        autoSync: true,
        sorters: [{
            property: 'nombre',
            direction: 'ASC'
        }],
        proxy: {
            type: 'localstorage',
            id: 'proxyPersonas'
        }
    }

});


