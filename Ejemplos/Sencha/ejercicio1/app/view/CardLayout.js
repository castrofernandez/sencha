Ext.define("Ejercicio1.view.CardLayout", {
    extend: 'Ext.form.Panel',
    requires: ['Ext.SegmentedButton'],
    alias: 'widget.card',
    config: {
        title: 'Card',
        iconCls: 'settings',
        defaults: {
            margin: 10
        },
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'segmentedbutton',
            docked: 'top',
            items: [{ text: 'Primero', pressed: true },
                    { text: 'Segundo' },
                    { text: 'Tercero' }
                    ],
            listeners: {
                toggle: function(segmentedbutton, button, isPressed, eOpts) {
                    if (isPressed) {
                        var container = segmentedbutton.getParent();
                        var txt = button.getText();
                        var selectedComponent = container.getComponent(button.getText());
                        container.setActiveItem(selectedComponent);
                    }
                }
            }
        },
        {
            xtype: 'component',
            itemId: 'Primero',
            html: 'Primer componente',
            style: 'background-color: pink'
        }, {
            xtype: 'component',
            itemId: 'Segundo',
            html: 'Segundo componente',
            style: 'background-color: lightblue'
        }, {
            xtype: 'component',
            itemId: 'Tercero',
            html: 'Tercer componente',
            style: 'background-color: lightgreen'
        }]

    }
});
