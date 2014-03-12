Ext.application({
    name: "Notas",

    models: ["Nota"],
    stores: ["Notas"],
    controllers: ["Notas"],
    views: ["NotasList", "NotasListContainer", "NotaEditor"],

    launch: function () {

        var notasListContainer = {
            xtype: "notaslistcontainer"
        };
        var notaEditor = {
            xtype: "notaeditor"
        };

        Ext.Viewport.add([notasListContainer, notaEditor]);

    }
});