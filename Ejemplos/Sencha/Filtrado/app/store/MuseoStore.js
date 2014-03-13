Ext.define('Filtros.store.MuseoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Filtros.model.Museo',
        autoLoad: true,
        storeId: 'museosStore',
        filters: [
                {
					filterFn: function(item) {
						var localizacion = item.data.localizacion;
						
						return localizacion && localizacion.length > 1;
					}
				}
		],
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
