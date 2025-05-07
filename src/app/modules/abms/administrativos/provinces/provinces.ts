import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'provinces',
    get: 'provinces',
    post: 'provinces',
    put: 'provinces',
    delete: 'provinces' 
};

//BUSCADOR
let filters = [
       {
        key: 'idCountry',
        label: 'Pais',
        type: 'select',
        url: 'countries',
        data: null,
        value: null
    },
    {
        key: 'idProvince',
        label: 'Id Provincia',
        type: 'number',
        url: null,
        data: null,
        value: null
    },
        {
        key: 'reference',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'idProvince',
        label: 'Id Provincia',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'reference',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
        {
        key: 'idCountry',
        label: 'Pais',
        type: 'select',
        url: 'countries',
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'countriesPais.idCountry',
        label: 'Pais',
        type: 'select',
        url: 'countries',
        data: null,
        notShow: ['edit'],
        readonly: true
    },
        {
        key: 'countriesPais.reference',
        label: 'Pais',
        type: 'select',
        url: 'countries',
        data: null,
        notShow: ['edit'],
        readonly: true
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'idProvince',
        label: 'Id Provincia',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'reference',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
    ,
        {
        key: 'countriesPais.reference',
        label: 'Pais',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    } ,
        {
        key: 'countriesPais.idCountry',
        label: 'Pais',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    } ,
        {
        key: 'idCountry',
        label: 'Id Pais',
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
        key: 'idCountry',
        label: 'Pais',
        type: 'select',
        url: 'countries',
        data: null,
        value: null
    },
    {
    key: 'idProvince',
    label: 'Id Provincia',
    type: 'number',
    url: '',
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'reference',
    label: 'Provincia',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: false
}
];


// Configuración
const Config = {
    title: "Provincias",
    columnId: "idProvince",
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