Ext.define('Ejercicio3.store.MuseoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ejercicio3.model.Museo',
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
