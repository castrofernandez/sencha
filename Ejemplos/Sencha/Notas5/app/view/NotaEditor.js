Ext.define("Notas.view.NotaEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.notaeditorview",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Editar nota",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Inicio",
                        itemId: "volver"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Guardar",
                        itemId: "guardar"
                    }
                ]
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "borrar"
                    }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'nota',
                        label: 'Nota',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'texto',
                        label: 'Texto'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#volver",
                event: "tap",
                fn: "pulsarVolver"
            },
            {
                delegate: "#guardar",
                event: "tap",
                fn: "pulsarGuardar"
            },
            {
                delegate: "#borrar",
                event: "tap",
                fn: "pulsarBorrar"
            }
        ]
    },
    pulsarGuardar: function () {
        console.log("pulsarGuardar");
        this.fireEvent("guardarNota", this);
    },
    pulsarBorrar: function () {
        console.log("deleteNotaCommand");
        this.fireEvent("borrarNota", this);
    },
    pulsarVolver: function () {
        console.log("pulsarVolver");
        this.fireEvent("volver", this);
    }

});

