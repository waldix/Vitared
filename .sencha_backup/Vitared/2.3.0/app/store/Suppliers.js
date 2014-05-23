/**
 * @class Vitared.store.Suppliers
 * @extends Ext.data.Store
 * This is the store to handle the suppliers
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Suppliers', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.Search',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.Search',
        proxy: {
            type: 'drupal',
            url: 'https://www.vitared.com.mx/middleware/proveedor.php',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'medicos'
            }
        }
    },

    resetCurrentPage: function() {
        this.currentPage = 1;
    }
});