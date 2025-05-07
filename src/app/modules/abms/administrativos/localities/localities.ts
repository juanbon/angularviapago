import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'localities',
    get: 'localities',
    post: 'localities',
    put: 'localities',
    delete: 'localities/' 
};

//BUSCADOR
let filters = [
       {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        value: null
    },
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'number',
        url: null,
        data: null,
        value: null
    },
        {
        key: 'reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
        {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'provinces.idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    },
        {
        key: 'provinces.reference',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
    ,
        {
        key: 'provinces.reference',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    } ,
        {
        key: 'provinces.idProvince',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    } ,
        {
        key: 'idProvince',
        label: 'Id Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = [
    {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        value: null
    },
    {
    key: 'idLocality',
    label: 'Id Localidad',
    type: 'number',
    url: '',
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'reference',
    label: 'Localidad',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: false
}
];


// Configuración
const Config = {
    title: "Localidades",
    columnId: "idLocality",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: true,
    showAdd: true,
    showEdit: true,
    showDelete: true,
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