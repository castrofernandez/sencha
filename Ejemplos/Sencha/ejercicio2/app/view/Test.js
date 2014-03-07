Ext.define('Ejercicio2.view.Test', {
                extend: 'Ext.Panel',
                alias: 'widget.test',
                requires: [
                    'Ext.data.JsonP', 'Ext.data.proxy.JsonP'
                ],
                config: {
                    scrollable: true,
                        title: 'List',
                        iconCls: 'action',
                    items: [{
                            xtype: 'panel',
                            id: 'JSONP'
                        }, {
                        docked: 'top',
                        xtype: 'toolbar',
                        items: [{
                            text: 'Load using JSON-P',
                            handler: function() {
                                var panel = Ext.getCmp('JSONP'),
                                    tpl = new Ext.XTemplate([
                                    '<div class="demo-weather">',
                                        '<tpl for=".">',
                                            '<div class="day">',
                                                '<div class="date">{date}</div>',
                                                '<tpl for="weatherIconUrl">',
                                                    '<img src="{value}">',
                                                '</tpl>',
                                                '<span class="temp">{tempMaxF}°<span class="temp_low">{tempMinF}°</span></span>',
                                            '</div>',
                                        '</tpl>',
                                    '</div>'
                                ]);

                                panel.getParent().setMasked({
                                    xtype: 'loadmask',
                                    message: 'Loading...'
                                });

                                Ext.data.JsonP.request({
                                    url: 'http://http://api.worldweatheronline.com/free/v1/tz.ashx',
                                    callbackKey: 'callback',
                                    params: {
                                        key: 'kdc62mx6bkx4cn8vgszapehf',
                                        q: '94301', // Palo Alto
                                        format: 'json',
                                        num_of_days: 5
                                    },

                                    callback: function(success, result) {
                                        var weather = result.data.weather;

                                        if (weather) {
                                            panel.updateHtml(tpl.applyTemplate(weather));
                                        }
                                        else {
                                            alert('There was an error retrieving the weather.');
                                        }

                                        panel.getParent().unmask();
                                    }
                                });
                            }
                        }]
                    }]
                }
            });
