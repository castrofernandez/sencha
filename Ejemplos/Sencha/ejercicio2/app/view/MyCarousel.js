Ext.define('Ejercicio2.view.MyCarousel', {
    extend: 'Ext.Panel',
    alias: 'widget.mycarousel',
    config: {
        title: 'Carousel',
        iconCls: 'action',
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Carrusel',
            margin: 0
        },
        {
            xtype: 'carousel',
            fullscreen: true,
            direction: 'horizontal',
            items: [{
                html: 'Naranja',
                style: 'background-color: orange'
            }, {
                html: 'Azul',
                style: 'background-color: lightblue'
            }, {
                html: 'Verde',
                style: 'background-color: lightgreen'
            }]
        }]
    }
});
