Ext.define('Mapa.store.MuseoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Mapa.model.Museo',
        autoLoad: true,
        storeId: 'museosStore',
        proxy: {
            type: 'ajax',
            url: 'data/museos.json',
             reader: {
                type: 'json',
                rootProperty:'directorios.directorio'
            }
        }

    }
});
