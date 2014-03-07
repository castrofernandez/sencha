Ext.define('Ejercicio2.view.Panels', {
    extend: 'Ext.Panel',
    alias: 'widget.mypanel',
    config: {
        title: 'Panel',
        iconCls: 'action',
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Paneles',
            margin: 0
        }, {
            xtype: 'button',
            text: 'Toca para abrir un panel',
            itemId: 'openPanelButton',
            margin: '35 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    if (!button.panel) {
                        button.panel = Ext.widget('panel', {
                            html: 'Esto es un panel!',
                            padding: 20,
                            width: 280,
                            modal: true,
                            hideOnMaskTap: true, //
                            hidden: true,
                            hideAnimation: 'fadeOut',
                            showAnimation: 'fadeIn'
                        });
                    }
                    button.panel.showBy(button);
                }
            }
        }, {
            xtype: 'button',
            text: 'Toca para abrir un action sheet',
            itemId: 'openButton',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    if (!button.sheet) {
                        button.sheet = Ext.widget('actionsheet', {
                            items: [{
                                text: 'Delete',
                                listeners: {
                                    tap: function(btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }, {
                                text: 'Approve',
                                ui: 'confirm',
                                listeners: {
                                    tap: function(btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }, {
                                text: 'Cancel',
                                ui: 'decline',
                                listeners: {
                                    tap: function(btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }]
                        });
                        Ext.Viewport.add(button.sheet); //
                    }
                    button.sheet.show(); //
                }
            }
        }, {
            xtype: 'button',
            text: 'alert()',
            itemId: 'alertButton',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    Ext.Msg.alert('alert()', 'Esto es un diálogo de alerta');
                }
            }
        }, {
            xtype: 'button',
            text: 'confirm()',
            itemId: 'confirmButton',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    Ext.Msg.confirm('confirm()', 'Esto es un diálogo de confirmación', function(answer) {
                        Ext.Msg.alert('Answer to confirm()', 'Has dicho ' + answer);
                        console.log('Answer to confirm(): ' + answer);
                    }, this);
                }
            }
        }, {
            xtype: 'button',
            text: 'prompt()',
            itemId: 'promptButton',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    Ext.Msg.prompt('prompt()',
                        'Este es un diálogo de entrada',
                        function(answer, text) {
                            Ext.Msg.alert('Answer to prompt()',
                                'Has dicho "' + text + '"');
                            console.log('Answer to prompt(): ' + text);
                        }, this);
                }
            }
        }, {
            xtype: 'button',
            text: 'Toca para mostrar un picker',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    if (!button.picker) {
                        button.picker = Ext.widget('picker', {
                            slots: [{ //
                                name: 'nombre',
                                title: 'Nombre',
                                data: [{
                                    text: 'Xavi',
                                    value: 'xavi'
                                }, {
                                    text: 'Xabi',
                                    value: 'xabi'
                                }, {
                                    text: 'Sergio',
                                    value: 'sergio'
                                }, {
                                    text: 'Fernando',
                                    value: 'fernando'
                                }]
                            }, {
                                name: 'apellido',
                                title: 'Apellido',
                                data: [{
                                    text: 'Hernández',
                                    value: 'hernández'
                                }, {
                                    text: 'Alonso',
                                    value: 'alonso'
                                }, {
                                    text: 'Ramos',
                                    value: 'ramos'
                                }, {
                                    text: 'Busquets',
                                    value: 'busquets'
                                }]
                            }],
                            listeners: {
                                //
                                cancel: function(picker, opts) {
                                    Ext.Msg.alert('cancel',
                                        'Picker ha sido cancelado');
                                },
                                change: function(picker, value, opts) {
                                    Ext.Msg.alert('selección',
                                        'El resultado del Picker es: ' +
                                        Ext.JSON.encode(value));
                                }
                            }
                        });
                        Ext.Viewport.add(button.picker); //
                    }
                    button.picker.show(); //
                }
            }
        }, {
            xtype: 'button',
            text: 'Toca para mostrar un sheet',
            itemId: 'openButton',
            margin: '0 50 35 50',
            listeners: {
                tap: function(button, e, eOpts) {
                    if (!button.sheet) {
                        button.sheet = Ext.widget('sheet', {
                            html: 'Algo de texto dentro del sheet',
                            style: 'color: white; font-weight: bold',
                            stretchX: true, //
                            hideOnMaskTap: true
                        });
                        Ext.Viewport.add(button.sheet);
                    }
                    button.sheet.show();
                }
            }
        },
        {

            xtype: 'image',
            src: 'resources/icons/Icon@2x.png',
            height: 114,
            width: 114,
            margin: '0 50 35 50',
        },
        {
            xtype:'audio',
            url:'res/audio/music.mp3'
        }
        ]
    }
});
