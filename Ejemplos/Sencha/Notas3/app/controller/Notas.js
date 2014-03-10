Ext.define("Notas.controller.Notas", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            notasListContainer: "notaslistcontainer",
            notaEditor: "notaeditor"
        },
        control: {
            notasListContainer: {
                // The commands fired by the notas list container.
                nuevaNota: "onNuevaNota",
                editarNota: "onEditarNota"
            },
            notaEditor: {
                // The commands fired by the nota editor.
                guardarNota: "onGuardarNota"
            }

        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateNotaEditor: function (record) {

        var notaEditor = this.getNotaEditor();
        notaEditor.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(notaEditor, this.slideLeftTransition);
    },
    activateNotasList: function () {
        Ext.Viewport.animateActiveItem(this.getNotasListContainer(), this.slideRightTransition);
    },

    // Commands.
    onNuevaNota: function () {

        console.log("onNuevaNota");

        var ahora = new Date();
        var notaId = (ahora.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var nuevaNota = Ext.create("Notas.model.Nota", {
            id: notaId,
            creacion: ahora,
            nota: "",
            texto: ""
        });

        this.activateNotaEditor(nuevaNota); 
    },
    onEditarNota: function (list, record) {

        console.log("onEditarNota");

        this.activateNotaEditor(record);
    },
    onGuardarNota: function () {

        console.log("onGuardarNota");

        var notaEditor = this.getNotaEditor();

        var notaEnCurso = notaEditor.getRecord();
        var nuevosValores = notaEditor.getValues();

        // Update the current nota's fields with form values.
        notaEnCurso.set("nota", nuevosValores.nota);
        notaEnCurso.set("texto", nuevosValores.texto);

        var errores = notaEnCurso.validate();

        if (!errores.isValid()) {
            Ext.Msg.alert('Espere', errores.getByField("nota")[0].getMessage(), Ext.emptyFn);
            notaEnCurso.reject();
            return;
        }

        var notasStore = Ext.getStore("Notas");

        if (null == notasStore.findRecord('id', notaEnCurso.data.id)) {
            notasStore.add(notaEnCurso);
        }

        notasStore.sync();

        notasStore.sort([{ property: 'creacion', direction: 'DESC'}]);

        this.activateNotasList();
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