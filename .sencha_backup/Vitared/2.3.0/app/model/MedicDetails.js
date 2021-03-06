/**
 * @class Vitared.model.Medic
 * @extends Ext.data.Model
 * The model for the medics
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.MedicDetails', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string',
                mapping: 'medico.title'
            },
            {
                name: 'first_name',
                type: 'string',
                mapping: 'medico.field_apellido_paterno'
            },
            {
                name: 'last_name',
                type: 'string',
                mapping: 'medico.field_apellido_materno'
            },
            {
                name: 'ranking',
                type: 'string',
                mapping: 'medico.ranking'
            },
            {
                name: 'foto',
                type: 'string',
                mapping: 'medico.field_foto'
            },
            {
                name: 'especialidad',
                type: 'string',
                mapping: 'medico.Especialidad'
            },
            {
                name: 'localidad',
                type: 'string',
                mapping: 'medico.Localidad'
            },
            {
                name: 'latitud',
                type: 'string',
                mapping: 'medico.Latitud'
            },
            {
                name: 'longitud',
                type: 'string',
                mapping: 'medico.Longitud'
            },
            {
                name: 'consultorio',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    var items = [];
                    Ext.Array.each(consultorios, function (item, index, ItSelf) {
                         items.push(item.consultorio);
                    });
                    return items;
                }
            },
            {
                name: 'facebook',
                type: 'string',
                mapping: 'medico.Facebook'
            },
            {
                name: 'twitter',
                type: 'string',
                mapping: 'medico.Twitter'
            },
            {
                name: 'email',
                type: 'string',
                mapping: 'medico.field_correo_electr_nico'
            },
            {
                name: 'web',
                type: 'string',
                mapping: 'medico.field_p_gina_web'
            },
            {
                name: 'num_consul',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    var num_consul = consultorios.length;
                    if(num_consul != 1){
                        return num_consul + ' consultorios';
                    } else {
                        return num_consul + ' consultorio';
                    }
                }
            },
            {
                name: 'telefono',
                type: 'string',
                mapping: 'medico.telefono'
            },{
                name: 'promociones',
                type: 'string',
                mapping: 'medico.promociones'
            },
            {
                name: 'publicaciones',
                type: 'string',
                mapping: 'medico.Publicaciones'
            },{
                name: 'imagen_publicacion',
                type: 'string',
                mapping: 'medico.Imagen_publicacion'
            },{
                name: 'cedula_profesional',
                type: 'string',
                mapping: 'medico.cedula_profesional'
            },{
                name: 'universidad_de_egreso',
                type: 'string',
                mapping: 'medico.universidad_de_egreso'
            },{
                name: 'antecedentes_de_practica',
                type: 'string',
                mapping: 'medico.antecedentes_de_practica'
            },{
                name: 'resena_de_servicios',
                type: 'string',
                mapping: 'medico.resena_de_servicios'
            },{
                name: 'listado_de_servicios',
                type: 'string',
                mapping: 'medico.Listado_de_Servicios'
            }
        ]
    }
});
