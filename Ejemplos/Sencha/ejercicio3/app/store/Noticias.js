Ext.define('Ejercicio3.store.Noticias', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ejercicio3.model.Noticia',
        autoLoad: true,
        storeId: 'noticiaStore',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://ep00.epimg.net/rss/elpais/portada.xml',

            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});
