Ext.define('Ejercicio2.view.Buttons1', {
    extend: 'Ext.Panel',
    alias: 'widget.buttons1',
    requires: ['Ext.Label'],
    config: {
        title: 'Botones',
        iconCls: 'home',

        defaults: {
            margin: 10
        },
        layout: {
            type: 'hbox'
        },
        items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Botones',
                margin:0
            }, {
                /*Contendedor para botones sin íconos*/
                xtype: 'container',
                flex: 0.5,
                items: [{
                    xtype: 'button',
                    text: 'action',
                    ui: 'action',
                    margin: '10 0 10 0',
                }, {
                    xtype: 'button',
                    text: 'back',
                    ui: 'back',
                    margin: '10 0 10 0',
                }, {
                    xtype: 'button',
                    text: 'confirm',
                    ui: 'confirm',
                    margin: '10 0 10 0',
                }, {
                    xtype: 'button',
                    text: 'decline',
                    ui: 'decline',
                    margin: '10 0 10 0'
                }, {
                    xtype: 'button',
                    text: 'normal',
                    ui: 'normal',
                    margin: '10 0 10 0'
                }, {
                    xtype: 'button',
                    text: 'plain',
                    ui: 'plain',
                    margin: '10 0 10 0'
                }, {
                    xtype: 'button',
                    text: 'round',
                    ui: 'round',
                    margin: '10 0 10 0'
                }]
            },
            /****************************************/
            {
                /*Contendedor para botones con íconos*/
                xtype: 'container',
                flex: 0.5,
                items: [{
                        xtype: 'button',
                        text: 'action',
                        ui: 'normal',
                        iconCls: 'action',
                        iconMask: true,
                        iconAlign: 'top',
                        margin: '10 0 10 0',
                    }, {
                        xtype: 'button',
                        text: 'add',
                        ui: 'normal',
                        iconCls: 'add',
                        iconMask: true,
                        iconAlign: 'right',
                        margin: '10 0 10 0',
                    }, {
                        xtype: 'button',
                        text: 'arrow_up',
                        ui: 'normal',
                        iconCls: 'arrow_up',
                        iconMask: true,
                        iconAlign: 'top',
                        margin: '10 0 10 0',
                    },
                    /*Botones left y right en un contenedor
                con layout horizontal (hbox)*/
                    {
                        xtype: 'container',
                        defaults: {
                            margin: 1
                        },
                        layout: {
                            type: 'hbox'
                        },
                        items: [{
                            xtype: 'button',
                            text: 'left',
                            ui: 'normal',
                            iconCls: 'arrow_left',
                            iconMask: true,
                            iconAlign: 'left',
                            //  margin: '10 0 0 0',
                        }, {
                            xtype: 'button',
                            text: 'right',
                            ui: 'normal',
                            iconCls: 'arrow_right',
                            iconMask: true,
                            iconAlign: 'right',
                            //margin: '10 0 10 0',
                        }]
                        /*********************************/
                    }, {
                        xtype: 'button',
                        text: 'arrow_down',
                        ui: 'normal',
                        iconCls: 'arrow_down',
                        iconMask: true,
                        iconAlign: 'bottom',
                        margin: '10 0 10 0',
                    }, {
                        xtype: 'container',
                        layout: {
                            type: 'hbox'
                        },
                        items: [{
                            xtype: 'label',
                            html: 'Esto es una etiqueta; puede mostrar cualquier texto HTML o texto plano.'
                        }]
                    }
                ]
                /****************************************/
            },
        ]
    }
});
