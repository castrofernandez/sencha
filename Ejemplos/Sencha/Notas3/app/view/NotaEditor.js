Ext.define("Notas.view.NotaEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.notaeditor",
    config: {
        scrollable: 'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var volver = {
            xtype: "button",
            ui: "back",
            text: "Inicio"
        };

        var guardar = {
            xtype: "button",
            ui: "action",
            text: "Guardar",
            handler: this.pulsarGuardar,
            scope: this
        };

        var toolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Editar nota",
            items: [
                volver,
                { xtype: "spacer" },
                guardar
            ]
        };

        var borrar = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this
        };

        var toolbar_inferior = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                borrar
            ]
        };

        var nota = {
            xtype: 'textfield',
            name: 'nota',
            label: 'Nota',
            required: true
        };

        var texto = {
            xtype: 'textareafield',
            name: 'texto',
            label: 'Texto'
        };

        this.add([
            toolbar,
            { xtype: "fieldset",
                items: [nota, texto]
            },
            toolbar_inferior
        ]);
    },
    pulsarGuardar: function () {
        console.log("pulsarGuardar");
        this.fireEvent("guardarNota", this);
    }

});

