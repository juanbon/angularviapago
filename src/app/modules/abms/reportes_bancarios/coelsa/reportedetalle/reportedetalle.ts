import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'coelsaArchivosDetalles/all',
    get: 'coelsaArchivosDetalles/all',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [
     {
    //    key: 'filter[where][FechaOperacion][lte]',
        key: 'FechaOperacionDesde',
        label: 'Fecha Operacion Desde',
        type: 'date',
        url: null,
        data: 1,
        value: null,
        class:'FechaDesde'
    },
    {
       // key: 'filter[where][FechaOperacion][gte]',
        key: 'FechaOperacionHasta',
        label: 'Fecha Operacion Hasta',
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
let typeShow = [
   
    {
        key: 'FechaOperacion',
        label: 'FechaOperacion',
        type: 'date',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = [{}];


// Configuración
const Config = {
    title: "Reporte Detalle",
    columnId: "IdArchivoDetalle",
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