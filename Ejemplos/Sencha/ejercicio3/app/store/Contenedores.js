Ext.define('Ejercicio3.store.Contenedores', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ejercicio3.model.Contenedor',
        autoLoad: true,
        storeId: 'contenedores',
        proxy: {
            type: 'ajax',
            url: 'data/contenedores-ropa.json',
             reader: {
                type: 'json',
                rootProperty:'contenedorropas.contenedorropa'
            }
        }

    }
});
