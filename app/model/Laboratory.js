/**
 * @class Vitared.model.Laboratory
 * @extends Ext.data.Model
 * The model for the laboratories
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.Laboratory', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string',
                mapping: 'medico.title'
            },
            {
                name: 'afiliado',
                type: 'string',
                mapping: 'medico.afiliado'
            },
            {
                name: 'promociones',
                type: 'string',
                mapping: 'medico.promociones'
            },
            {
                name: 'direcciones',
                type: 'string',
                mapping: 'medico.direcciones'
            },
            {
                name: 'telefono',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.telefono;
                }
            },
            {
                name: 'foto',
                type: 'string',
                mapping: 'medico.field_foto'
            },
            {
                name: 'localidad',
                type: 'string',
                mapping: 'medico.localidad'
            },
            {
                name: 'latitud',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Latitud;
                }
            },
            {
                name: 'longitud',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Longitud;
                }
            },
            {
                name: 'numero_telefono',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.numero_telefono;
                }
            },
            {
                name: 'calle',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.calle;
                }
            },
            {
                name: 'horario',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Horarios;
                }
            },
            {
                name: 'destacado',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.paquete_weight;
                }
            },
            {
                name: 'orden',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.orden;
                }
            },
            {
                name: 'subespecialidad',
                type: 'string',
                mapping: 'medico.Subespecialidad'
            },
            {
                name: 'categoria',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.categoria;
                }
            },
            {
                name: 'tipo',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.tipo;
                }
            }

        ]
    }
});