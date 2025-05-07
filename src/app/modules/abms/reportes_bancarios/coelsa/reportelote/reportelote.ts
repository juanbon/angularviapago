import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'coelsaArchivosLotes/all',
    get: 'coelsaArchivosLotes/all',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [
     {
    
        key: 'FechaCreacionDesde',
        label: 'Fecha Creacion Desde',
        type: 'date',
        url: null,
        data: 1,
        value: null,
        class:'FechaDesde'
    },
    {
      
        key: 'FechaCreacionHasta',
        label: 'Fecha Creacion Hasta',
        type: 'date',
        url: null,
        data: 2,
        value: null,
        class:'FechaHasta'
    },
         {
    
        key: 'FechaNegocioDesde',
        label: 'Fecha Negocio Desde',
        type: 'date',
        url: null,
        data: 1,
        value: null,
        class:'FechaDesde'
    },
    {
       
        key: 'FechaNegocioHasta',
        label: 'Fecha Negocio Hasta',
        type: 'date',
        url: null,
        data: 2,
        value: null,
        class:'FechaHasta'
    }
];

//CAMPOS
let typesEdit = [{}]; 

//SHOW
let typeShow = [{}]; 

//POST
let postFields = [{}];


// Configuración
const Config = {
    title: "Reporte Lote",
    columnId: "IdArchivoLote",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, ''),
        paginated:true
}

export default Config;