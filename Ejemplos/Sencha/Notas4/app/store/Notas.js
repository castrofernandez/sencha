Ext.define("Notas.store.Notas", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "Notas.model.Nota",
        proxy: {
            type: 'localstorage',
            id: 'notes-app-store'
        },
        sorters: [{ property: 'creacion', direction: 'DESC'}],
        grouper: {
            sortProperty: "creacion",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.creacion) {
                    return record.data.creacion.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});
