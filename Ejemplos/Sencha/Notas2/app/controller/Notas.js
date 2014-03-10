Ext.define("Notas.controller.Notas", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            notasListContainer: "notaslistcontainer"
        },
        control: {
            notasListContainer: {
                // The commands fired by the notas list container.
                nuevaNota: "onNuevaNota",
                editarNota: "onEditarNota"
            }
        }
    },

    // Commands.
    onNuevaNota: function () {

        console.log("onNuevaNota");        
    },
    onEditarNota: function (list, record) {

        console.log("onEditarNota");
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        Ext.getStore("Notas").load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});