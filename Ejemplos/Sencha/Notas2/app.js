Ext.application({
    name: "Notas",

    models: ["Nota"],
    stores: ["Notas"],
    controllers: ["Notas"],
    views: ["NotasList", "NotasListContainer"],

    launch: function () {

        var notasListContainer = {
            xtype: "notaslistcontainer"
        };       

        Ext.Viewport.add(notasListContainer);
    }
});