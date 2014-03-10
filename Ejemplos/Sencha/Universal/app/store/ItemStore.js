Ext.define('Universal.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
                { text: 'Primer elemento', screen: 'primerelemento' },
                { text: 'Segundo elemento', screen: 'segundoelemento' },
                { text: 'Tercer elemento', screen: 'tercerelemento' }
        ]
    }
});

