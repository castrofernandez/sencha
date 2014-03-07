Ext.define('Ejercicio2.store.MemoryStorePersonas', {
    extend: 'Ext.data.Store',
    xtype: 'store_personas',
    config: {
        model: 'Ejercicio2.model.Persona',
        storeId: 'storePersonas',
        autoLoad: true,
        sorters: [{
            property: 'nombre',
            direction: 'ASC'
        }],
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'personas'
            }
        }
    }
});

